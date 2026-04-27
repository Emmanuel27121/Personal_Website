import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

    try {
        const { name, email, message } = await req.json();

        const data = await resend.emails.send({
            from: 'Contact Form <contact@emmanueloje.online>',
            to: 'opeoje27@gmail.com',
            replyTo: email,
            subject: `New Message from ${name}`,
            text: message,
        });

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
}