import { type NextRequest, NextResponse } from "next/server"

// The API key
const OPENAI_API_KEY =
  process.env.OPENAI_API_KEY ||
  "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"

// OpenAI API endpoint
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()

    // Log what we received
    console.log("Received request body:", JSON.stringify(body))

    // Extract messages, ensuring we have a valid array
    const messages = Array.isArray(body.messages) ? body.messages : []

    // Create a safe version of the messages array with only the required fields
    const safeMessages = messages
      .filter((msg) => msg && typeof msg === "object") // Ensure message is an object
      .map((msg) => {
        // Extract role and content, providing defaults if undefined
        const role = typeof msg.role === "string" ? msg.role : "user"
        const content = typeof msg.content === "string" ? msg.content : ""

        // Ensure role is valid for OpenAI
        const validRole = ["system", "user", "assistant"].includes(role) ? role : "user"

        return { role: validRole, content }
      })
      .filter((msg) => msg.content.trim() !== "") // Remove empty messages

    // Add a system message if none exists
    if (!safeMessages.some((msg) => msg.role === "system")) {
      safeMessages.unshift({
        role: "system",
        content:
          "You are Apna Chat Bot, a helpful AI assistant created by Shriyash Soni. You provide personalized guidance, career counseling, academic help, and general support. You are knowledgeable about Indian education systems, career paths, exams, universities, and tech skills. Be friendly, conversational, and helpful.",
      })
    }

    // Log what we're sending to OpenAI
    console.log("Sending to OpenAI:", JSON.stringify(safeMessages))

    // If we have no valid messages, return a default response
    if (safeMessages.length < 2) {
      // Need at least system + user message
      return NextResponse.json({
        response: "Hello! I'm Apna Chat Bot. How can I help you today?",
      })
    }

    // Prepare the request to OpenAI
    const openAIRequest = {
      model: "gpt-3.5-turbo",
      messages: safeMessages,
      temperature: 0.7,
      max_tokens: 1000,
    }

    // Call the OpenAI API directly using fetch
    const openAIResponse = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(openAIRequest),
    })

    // Parse the OpenAI response
    const openAIData = await openAIResponse.json()

    // Log the response from OpenAI
    console.log("OpenAI response:", JSON.stringify(openAIData))

    // Check if the response is valid
    if (openAIResponse.ok && openAIData.choices && openAIData.choices[0]?.message?.content) {
      return NextResponse.json({
        response: openAIData.choices[0].message.content,
      })
    } else {
      // If OpenAI returns an error, log it and return a fallback response
      console.error("OpenAI API error:", openAIData)
      return NextResponse.json({
        response:
          "I'm having trouble connecting to my knowledge base right now. Could you please try again in a moment?",
        error: openAIData.error?.message || "Unknown OpenAI API error",
      })
    }
  } catch (error) {
    // Log any errors that occur
    console.error("Error in OpenAI API route:", error)

    // Return a fallback response
    return NextResponse.json({
      response:
        "I apologize for the technical difficulty. I'm experiencing a temporary issue with my response system. Please try again shortly.",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
