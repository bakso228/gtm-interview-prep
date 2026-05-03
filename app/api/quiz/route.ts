import { NextResponse } from "next/server";

const SHEETS_URL = process.env.SHEETS_WEBHOOK_URL;

export async function GET() {
  if (!SHEETS_URL) {
    return NextResponse.json({ ok: true, attempts: [], configured: false });
  }
  try {
    const res = await fetch(SHEETS_URL, { cache: "no-store" });
    const data = await res.json();
    return NextResponse.json({ ...data, configured: true });
  } catch (err) {
    return NextResponse.json({ ok: false, attempts: [], configured: true, error: String(err) });
  }
}

export async function POST(request: Request) {
  if (!SHEETS_URL) return NextResponse.json({ ok: true, configured: false });
  try {
    const body = await request.text();
    const sheetsRes = await fetch(SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body,
    });
    const text = await sheetsRes.text();
    // If Apps Script returns non-JSON (e.g. a login page), surface the status
    try {
      JSON.parse(text);
      return NextResponse.json({ ok: true, configured: true });
    } catch {
      return NextResponse.json({ ok: false, configured: true, status: sheetsRes.status, preview: text.slice(0, 400) });
    }
  } catch (err) {
    return NextResponse.json({ ok: false, configured: true, error: String(err) });
  }
}
