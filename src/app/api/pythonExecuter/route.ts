import { spawn } from "child_process";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const pythonCode = body.code;

  if (!pythonCode || typeof pythonCode !== "string") {
    return NextResponse.json({ success: false, error: "No code provided" });
  }

  try {
    const result = await new Promise((resolve) => {
      const pythonProcess = spawn("python", ["-c", pythonCode]);

      let stdout = "";
      let stderr = "";

      pythonProcess.stdout.on("data", (data) => {
        stdout += data.toString();
      });

      pythonProcess.stderr.on("data", (data) => {
        stderr += data.toString();
      });

      pythonProcess.on("close", (exitCode) => {
        if (exitCode === 0) {
          resolve({ success: true, output: stdout.trim() });
        } else {
          resolve({
            success: false,
            error: stderr.trim() || "Unknown error occurred",
            exitCode,
          });
        }
      });
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Unexpected server error",
    });
  }
}
