import { NextResponse } from "next/server";
import { spawnSync } from "child_process";

export async function GET() {
  try {
    const java = spawnSync("java", ["-version"]);
    const javac = spawnSync("javac", ["-version"]);
    const python = spawnSync("python3", ["--version"]);

    return NextResponse.json({
      success: true,
      java: java.stderr.toString() || java.stdout.toString(),
      javac: javac.stderr.toString() || javac.stdout.toString(),
      python: python.stdout.toString(),
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
