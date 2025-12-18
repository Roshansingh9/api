import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const data = req.body;

  await resend.emails.send({
    from: "roshan.kr.singh9857@gmail.com",
    to: ["roshan.kr.singh8545@gmail.com"],
    subject: "New Registration",
    text: JSON.stringify(data, null, 2),
  });

  res.status(200).json({ success: true });
}
