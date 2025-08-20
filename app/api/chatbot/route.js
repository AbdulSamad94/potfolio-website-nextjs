import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Raw request body:", body);

    const message = body.message;
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const pythonBackendUrl = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;
    const backendEndpoint = `${pythonBackendUrl}/chat`;

    console.log(`Forwarding message to Python backend: ${message}`);
    console.log(`Backend URL: ${backendEndpoint}`);

    const backendResponse = await fetch(backendEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
      signal: AbortSignal.timeout(30000),
    });

    console.log("Backend response status:", backendResponse.status);

    if (!backendResponse.ok) {
      let errorData;
      try {
        errorData = await backendResponse.json();
      } catch {
        errorData = { error: `Backend returned status ${backendResponse.status}` };
      }
      return NextResponse.json(
        { error: errorData.error || "Failed to get response from AI agent" },
        { status: backendResponse.status }
      );
    }

    const data = await backendResponse.json();
    console.log("Received response from Python backend:", data);

    return NextResponse.json(
      { response: data.response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in Next.js API route:", error);

    if (error.name === "AbortError") {
      return NextResponse.json(
        { error: "Request timeout - backend took too long to respond" },
        { status: 408 }
      );
    }

    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}
