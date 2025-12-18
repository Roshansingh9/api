import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: any, res: any) {
  // ✅ REQUIRED CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const data = req.body;

  await resend.emails.send({
    from: "onboarding@resend.dev", // use this until domain is verified
    to: ["roshan.kr.singh9857@gmail.com"],
    subject: "New Registration",
    text: JSON.stringify(data, null, 2),
  });

  return res.status(200).json({ success: true });
}
