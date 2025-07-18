// app/api/chatbot/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        console.log('Raw request body:', body);

        // Handle both direct message and nested message formats
        const message = body.message || (Array.isArray(body) ? body[0]?.message : null);

        if (!message) {
            console.error('No message found in request body:', body);
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        // Use IPv4 address instead of localhost to avoid IPv6 issues
        const pythonBackendUrl = process.env.PYTHON_BACKEND_URL || 'http://127.0.0.1:8000/chat';

        console.log(`Forwarding message to Python backend: ${message}`);
        console.log(`Backend URL: ${pythonBackendUrl}`);

        const backendResponse = await fetch(pythonBackendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }), // Ensure we're sending the correct format
        });

        if (!backendResponse.ok) {
            let errorData;
            try {
                errorData = await backendResponse.json();
            } catch {
                errorData = { error: 'Unknown backend error' };
            }
            console.error('Error from Python backend:', errorData);
            return NextResponse.json(
                { error: errorData.error || 'Failed to get response from AI agent' },
                { status: backendResponse.status }
            );
        }

        const data = await backendResponse.json();
        console.log(`Received response from Python backend: ${data.response}`);
        return NextResponse.json({ response: data.response }, { status: 200 });

    } catch (error) {
        console.error('Error in Next.js API route:', error);
        return NextResponse.json(
            { error: 'Internal server error while processing chat request.' },
            { status: 500 }
        );
    }
}