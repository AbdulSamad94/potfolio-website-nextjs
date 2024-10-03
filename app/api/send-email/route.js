import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, message } = await request.json();

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use TLS
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Send email
        await transporter.sendMail({
            from: '"Your Website" <abdulsamadsiddiqui2000@gmail.com>',
            to: "abdulsamadsiddiqui2000@gmail.com",
            subject: "New message from your website",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}