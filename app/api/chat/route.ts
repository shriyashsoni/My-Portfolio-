import { type NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = "AIzaSyACWpBzDjUBvhx6h-ycRdUW2bJ9421Cdqc"
// Updated API URL with the correct model name
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    // Extract the last user message for a simpler implementation
    const lastUserMessage = messages.filter((m: any) => m.role === "user").pop()

    if (!lastUserMessage) {
      return NextResponse.json({ error: "No user message found" }, { status: 400 })
    }

    // Prepare the request payload for Gemini
    // Using a simpler format that works with the Gemini API
    const payload = {
      contents: [
        {
          parts: [
            {
              text: "You are Apna Chat Bot, a helpful AI assistant created by Shriyash Soni. You are designed to provide personalized guidance, career counseling, academic help, and general support to users. You are knowledgeable about Indian education systems, career paths, exams, universities, and tech skills. You are friendly, conversational, and helpful. You can communicate in English, Hindi, and other regional Indian languages.",
            },
          ],
          role: "user",
        },
        {
          parts: [{ text: lastUserMessage.content }],
          role: "user",
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    }

    console.log("Sending request to Gemini API:", JSON.stringify(payload))

    // Make the API call to Gemini
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    console.log("Gemini API response:", JSON.stringify(data))

    // Handle potential errors
    if (!response.ok) {
      console.error("Gemini API error:", data)
      return NextResponse.json({ error: "Failed to get response from AI" }, { status: response.status })
    }

    // Extract the response text
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response."

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error("Error in chat API route:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}
