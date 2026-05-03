import { NextResponse } from "next/server";

const SHEETS_URL = process.env.SHEETS_WEBHOOK_URL;

export async function GET() {
  if (!SHEETS_URL) return NextResponse.json({ ok: true, attempts: [] });
  try {
    const res = await fetch(SHEETS_URL, { cache: "no-store" });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ ok: true, attempts: [] });
  }
}

export async function POST(request: Request) {
  if (!SHEETS_URL) return NextResponse.json({ ok: true });
  try {
    const body = await request.text();
    await fetch(SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body,
    });
  } catch {
    // silent fail — localStorage is source of truth
  }
  return NextResponse.json({ ok: true });
}
