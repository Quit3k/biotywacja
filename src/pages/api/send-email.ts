// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane.' });
  }

  const sanitizedName = escapeHtml(name);
  const sanitizedEmail = escapeHtml(email);
  const sanitizedMessage = escapeHtml(message);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Biotywacja <onboarding@resend.dev>',
      to: ['erykkokoczkaa@gmail.com'], // Pamiętaj, żeby to zmienić
      subject: `Nowa wiadomość z formularza od: ${sanitizedName}`,
      // ZMIANA: Poprawiono 'reply_to' na 'replyTo'
      replyTo: sanitizedEmail, 
      html: `
        <h1>Wiadomość z formularza kontaktowego</h1>
        <p><strong>Od:</strong> ${sanitizedName}</p>
        <p><strong>E-mail:</strong> ${sanitizedEmail}</p>
        <hr />
        <h2>Wiadomość:</h2>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      return res.status(400).json(error);
    }
    
    res.status(200).json({ message: 'Wiadomość wysłana pomyślnie!' });
  } catch (error) {
    res.status(500).json({ error: 'Wystąpił błąd serwera.' });
  }
}