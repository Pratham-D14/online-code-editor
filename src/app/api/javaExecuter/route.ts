import { NextResponse } from "next/server";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const javaCode: string = body.code;
    if (!javaCode || typeof javaCode !== "string") {
      return NextResponse.json({ success: false, error: "No code provided" });
    }

    // 1) Try to extract package name (optional)
    const pkgMatch = javaCode.match(/^\s*package\s+([a-zA-Z0-9_.]+)\s*;/m);
    const packageName = pkgMatch ? pkgMatch[1] : null;

    // 2) Try to find a public class name, otherwise first class
    let classMatch = javaCode.match(/public\s+class\s+([A-Za-z_]\w*)/);
    if (!classMatch) {
      classMatch = javaCode.match(/class\s+([A-Za-z_]\w*)/);
    }
    if (!classMatch) {
      return NextResponse.json({
        success: false,
        error: "No class declaration found in the provided code",
      });
    }
    const className = classMatch[1];

    // 3) Prepare file path (respect package folders if present)
    const packageDir = packageName ? packageName.replace(/\./g, path.sep) : "";
    if (packageDir) {
      fs.mkdirSync(packageDir, { recursive: true });
    }
    const filePath = path.join(packageDir, `${className}.java`);

    // 4) Write Java file
    fs.writeFileSync(filePath, javaCode);

    // Helper to run a spawn and collect stdout/stderr
    const runSpawn = (
      cmd: string,
      args: string[],
      cwd?: string,
      timeoutMs = 10000
    ) =>
      new Promise<{
        code: number | null;
        stdout: string;
        stderr: string;
        timedOut?: boolean;
      }>((resolve) => {
        const p = spawn(cmd, args, { cwd: cwd || process.cwd() });
        let stdout = "";
        let stderr = "";
        let timedOut = false;

        const to = setTimeout(() => {
          timedOut = true;
          try {
            p.kill("SIGKILL");
          } catch {}
        }, timeoutMs);

        p.stdout.on("data", (d) => (stdout += d.toString()));
        p.stderr.on("data", (d) => (stderr += d.toString()));

        p.on("close", (code) => {
          clearTimeout(to);
          resolve({ code, stdout, stderr, timedOut });
        });

        p.on("error", (err) => {
          clearTimeout(to);
          resolve({
            code: null,
            stdout,
            stderr: (stderr += err.message),
            timedOut,
          });
        });
      });

    // 5) Compile with javac (use filePath)
    const compileRes = await runSpawn("javac", [filePath]);
    if (compileRes.timedOut) {
      return NextResponse.json({
        success: false,
        error: "Compilation timed out",
      });
    }
    if (compileRes.code !== 0) {
      return NextResponse.json({
        success: false,
        error: compileRes.stderr || "Compilation failed",
      });
    }

    // 6) Run with java -cp . <qualifiedName>
    const qualifiedName = packageName
      ? `${packageName}.${className}`
      : className;
    const runRes = await runSpawn("java", ["-cp", ".", qualifiedName]);
    if (runRes.timedOut) {
      return NextResponse.json({
        success: false,
        error: "Execution timed out",
      });
    }
    if (runRes.code !== 0 && runRes.stderr) {
      return NextResponse.json({ success: false, error: runRes.stderr });
    }
    // 7) Return stdout
    return NextResponse.json({
      success: true,
      output: runRes.stdout + "\n=== Code Execution Successful ===\n",
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || String(err),
    });
  }
}
