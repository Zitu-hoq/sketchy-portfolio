import { checkRateLimit, recordSubmission } from "@/lib/rate-limit";

const FORM_URL = process.env.GOOGLE_FORM_URL!;
const ENTRY_EMAIL = process.env.GOOGLE_FORM_ENTRY_EMAIL!;
const ENTRY_MESSAGE = process.env.GOOGLE_FORM_ENTRY_MESSAGE!;

export async function POST(req: Request) {
  const check = checkRateLimit(req);
  if (!check.allowed) {
    return Response.json({ error: check.error }, { status: check.status });
  }

  try {
    const { email, message } = await req.json();

    const formData = new URLSearchParams();
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_MESSAGE, message);

    await fetch(FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    recordSubmission(check.ip);
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to submit form. Please try again." },
      { status: 500 },
    );
  }
}
