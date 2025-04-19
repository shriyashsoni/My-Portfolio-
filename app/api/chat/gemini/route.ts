import { type NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = "AIzaSyACWpBzDjUBvhx6h-ycRdUW2bJ9421Cdqc"
// Updated API URL with the correct model name
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "No prompt provided" }, { status: 400 })
    }

    const payload = {
      contents: [
        {
          parts: [
            {
              text: "You are Apna Chat Bot, a helpful AI assistant created by Shriyash Soni. You provide personalized guidance, career counseling, academic help, and general support. You are knowledgeable about Indian education systems, career paths, exams, universities, and tech skills. Be friendly and helpful.",
            },
            { text: prompt },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    }

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Gemini API error:", data)
      return NextResponse.json({ error: "Failed to get response from AI" }, { status: response.status })
    }

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response."

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error("Error in gemini API route:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}
