import { type NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = "AIzaSyACWpBzDjUBvhx6h-ycRdUW2bJ9421Cdqc"

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "No prompt provided" }, { status: 400 })
    }

    // Using the most basic endpoint structure
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`

    const payload = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    }

    console.log("Sending simple request to Gemini API:", JSON.stringify(payload))

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    console.log("Simple Gemini API response:", JSON.stringify(data))

    if (!response.ok) {
      console.error("Simple Gemini API error:", data)
      return NextResponse.json({ error: "Failed to get response from AI" }, { status: response.status })
    }

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response."

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error("Error in simple API route:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}
