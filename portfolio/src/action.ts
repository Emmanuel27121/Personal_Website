"use server"

import  { Resend } from "resend";



export async function sendEmail(formData: FormData){
    const resend = new Resend(process.env.RESEND_API_KEY);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try{
        await resend.emails.send({
            from: `Contact Form <contact@emmanueloje.online>`,
            to: 'opeoje27@gmail.com',
            replyTo: email,
            subject: `New Portfolio Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n ${message}`,
        });
        return { success: true };
    } catch(err){
        console.error(err);
        return { success: false };
    }

}