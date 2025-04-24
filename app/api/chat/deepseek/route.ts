import { type NextRequest, NextResponse } from "next/server"

// DeepSeek API key
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || "sk-db96c1699d0448d3ba95f776e4547fb8"

// DeepSeek API endpoint
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()

    // Log what we received
    console.log("Received request body for DeepSeek:", JSON.stringify(body))

    // Extract messages, ensuring we have a valid array
    const messages = Array.isArray(body.messages) ? body.messages : []

    // Create a safe version of the messages array with only the required fields
    const safeMessages = messages
      .filter((msg) => msg && typeof msg === "object") // Ensure message is an object
      .map((msg) => {
        // Extract role and content, providing defaults if undefined
        const role = typeof msg.role === "string" ? msg.role : "user"
        const content = typeof msg.content === "string" ? msg.content : ""

        // Ensure role is valid for DeepSeek
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

    // Log what we're sending to DeepSeek
    console.log("Sending to DeepSeek:", JSON.stringify(safeMessages))

    // If we have no valid messages, return a default response
    if (safeMessages.length < 2) {
      // Need at least system + user message
      return NextResponse.json({
        response: "Hello! I'm Apna Chat Bot powered by DeepSeek. How can I help you today?",
      })
    }

    // Prepare the request to DeepSeek
    const deepseekRequest = {
      model: "deepseek-chat", // Using a default model, adjust as needed
      messages: safeMessages,
      temperature: 0.7,
      max_tokens: 1000,
    }

    // Call the DeepSeek API directly using fetch
    const deepseekResponse = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify(deepseekRequest),
    })

    // Parse the DeepSeek response
    const deepseekData = await deepseekResponse.json()

    // Log the response from DeepSeek
    console.log("DeepSeek response:", JSON.stringify(deepseekData))

    // Check if the response is valid
    if (deepseekResponse.ok && deepseekData.choices && deepseekData.choices[0]?.message?.content) {
      return NextResponse.json({
        response: deepseekData.choices[0].message.content,
      })
    } else {
      // If DeepSeek returns an error, log it and return a fallback response
      console.error("DeepSeek API error:", deepseekData)

      // Check for insufficient balance error
      const errorMessage = deepseekData.error?.message || ""
      const isInsufficientBalance = errorMessage.includes("Insufficient Balance")

      return NextResponse.json({
        response: isInsufficientBalance
          ? "I'm switching to an alternative AI model to better assist you."
          : "I'm having trouble connecting to my knowledge base right now. Could you please try again in a moment?",
        error: deepseekData.error?.message || "Unknown DeepSeek API error",
        insufficientBalance: isInsufficientBalance,
      })
    }
  } catch (error) {
    // Log any errors that occur
    console.error("Error in DeepSeek API route:", error)

    // Return a fallback response
    return NextResponse.json({
      response:
        "I apologize for the technical difficulty. I'm experiencing a temporary issue with my response system. Please try again shortly.",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
