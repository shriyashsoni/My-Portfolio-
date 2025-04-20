import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Try to parse the request body, but don't worry if it fails
    let userMessage = "Hello"
    try {
      const body = await request.json()
      if (body && body.messages && Array.isArray(body.messages)) {
        // Find the last user message
        for (let i = body.messages.length - 1; i >= 0; i--) {
          const msg = body.messages[i]
          if (msg && msg.role === "user" && typeof msg.content === "string" && msg.content.trim() !== "") {
            userMessage = msg.content
            break
          }
        }
      }
    } catch (parseError) {
      console.error("Error parsing request in mock API:", parseError)
      // Continue with default message
    }

    // Simple response generation based on keywords
    let response = "Hello! I'm Apna Chat Bot. How can I help you today?"

    // Convert to lowercase safely
    const userMessageLower = typeof userMessage === "string" ? userMessage.toLowerCase() : ""

    if (userMessageLower.includes("apna coding")) {
      response =
        "Apna Coding is a global coding platform founded by Shriyash Soni that offers courses, hackathons, and resources for developers."
    } else if (userMessageLower.includes("career")) {
      response = "I can help with career guidance! What specific field are you interested in?"
    } else if (userMessageLower.includes("education") || userMessageLower.includes("college")) {
      response = "Education is important! Are you looking for information about specific colleges or courses?"
    } else if (userMessageLower.includes("shriyash")) {
      response =
        "Shriyash Soni is an entrepreneur, coder, counsellor, and musician. He founded Apna Counsellor and Apna Coding."
    } else if (userMessageLower.includes("help")) {
      response =
        "I can help with career guidance, education information, coding resources, and more. What do you need assistance with?"
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in mock API route:", error)
    return NextResponse.json({
      response: "I'm here to help! What would you like to know?",
    })
  }
}
