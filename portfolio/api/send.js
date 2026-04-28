import { Resend } from 'resend';
import { ContactEmail } from '../src/email/ContactEmail'

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

    const { name, email, message } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <contact@emmanueloje.online>',
            to: 'opeoje27@gmail.com',
            replyTo: email,
            subject: `New Message from ${name}`,
            react: ContactEmail({ name, email, message }),
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}