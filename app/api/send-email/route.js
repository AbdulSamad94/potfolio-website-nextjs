import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, message } = await request.json();

    // Log environment variables (be careful not to expose sensitive information in production)
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');

    // Create a transporter using SMTP
    let transporter;
    try {
        transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    } catch (error) {
        console.error('Error creating transporter:', error);
        return NextResponse.json({ message: 'Error creating email transporter' }, { status: 500 });
    }

    try {
        // Verify SMTP connection configuration
        await transporter.verify();
        console.log('SMTP connection verified successfully');

        // Send email
        const info = await transporter.sendMail({
            from: '"Your Website" <abdulsamadsiddiqui2000@gmail.com>',
            to: "abdulsamadsiddiqui2000@gmail.com",
            subject: "New message from your website",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        });

        console.log('Email sent successfully:', info.messageId);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }
}