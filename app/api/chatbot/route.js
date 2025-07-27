import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Raw request body:", body);

    // Handle both direct message and nested message formats
    const message =
      body.message || (Array.isArray(body) ? body[0]?.message : null);

    // Extract session_id from request (if provided)
    const session_id =
      body.session_id || (Array.isArray(body) ? body[0]?.session_id : null);

    if (!message) {
      console.error("No message found in request body:", body);
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Force IPv4 connection - replace localhost with 127.0.0.1
    const pythonBackendUrl = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL || "http://127.0.0.1:8000";
    const backendEndpoint = `${pythonBackendUrl}/chat`.replace("localhost", "127.0.0.1");

    console.log(`Forwarding message to Python backend: ${message}`);
    console.log(`Session ID: ${session_id || 'New session'}`);
    console.log(`Backend URL: ${backendEndpoint}`);

    const requestPayload = {
      message,
      ...(session_id && { session_id })
    };

    console.log("Request payload:", JSON.stringify(requestPayload));

    // Add family: 4 to force IPv4 (Node.js specific)
    const backendResponse = await fetch(backendEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestPayload),
      signal: AbortSignal.timeout(30000)
    });

    console.log("Backend response status:", backendResponse.status);

    if (!backendResponse.ok) {
      let errorData;
      try {
        errorData = await backendResponse.json();
      } catch {
        errorData = { error: `Backend returned status ${backendResponse.status}` };
      }
      console.error("Error from Python backend:", errorData);
      return NextResponse.json(
        { error: errorData.error || "Failed to get response from AI agent" },
        { status: backendResponse.status }
      );
    }

    const data = await backendResponse.json();
    console.log(`Received response from Python backend:`, data);

    return NextResponse.json(
      {
        response: data.response,
        session_id: data.session_id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in Next.js API route:", error);

    if (error.name === 'AbortError') {
      return NextResponse.json(
        { error: "Request timeout - backend took too long to respond" },
        { status: 408 }
      );
    }

    if (error.code === 'ECONNREFUSED') {
      return NextResponse.json(
        { error: "Cannot connect to backend server. Please ensure the Python backend is running on port 8000 and accessible at 127.0.0.1:8000" },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}