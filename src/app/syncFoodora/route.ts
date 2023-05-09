import { NextResponse } from "next/server";

export async function GET() {
  const data = { text: "foobar" };

  return NextResponse.json({ data });
}
