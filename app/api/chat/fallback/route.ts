import { type NextRequest, NextResponse } from "next/server"

// A more comprehensive mock response system
export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    // Get the last user message - ensure we handle undefined values
    const lastUserMessage = [...messages]
      .reverse()
      .find((msg) => msg && msg.role === "user" && typeof msg.content === "string")

    const promptLower =
      lastUserMessage && typeof lastUserMessage.content === "string" ? lastUserMessage.content.toLowerCase() : ""

    // Apna Coding specific responses
    if (
      promptLower.includes("apna coding") ||
      promptLower.includes("coding community") ||
      promptLower.includes("learn coding")
    ) {
      return NextResponse.json({
        response: `Apna Coding is a global level coding community founded by Shriyash Soni. It offers:

1. Comprehensive coding courses for beginners to advanced learners
2. Regular hackathons and coding challenges
3. Community support for aspiring developers
4. AI-powered tools to enhance learning
5. Partnerships with organizations like STEM4Youth USA

The platform focuses on practical skills and real-world applications, helping students and professionals improve their coding abilities and build impressive portfolios.

Would you like to know more about specific courses or resources available through Apna Coding?`,
      })
    }

    // Career guidance responses
    if (
      promptLower.includes("career") ||
      promptLower.includes("job") ||
      promptLower.includes("profession") ||
      promptLower.includes("work")
    ) {
      return NextResponse.json({
        response: `As a career counselor, I'd recommend exploring fields that align with your interests and strengths. 

Some popular career paths in India include:
- Technology (Software Development, Data Science, AI)
- Engineering (Civil, Mechanical, Electrical)
- Medicine and Healthcare
- Business and Management
- Education
- Creative fields (Design, Content Creation)

To make a good career choice:
1. Assess your interests, skills, and values
2. Research growing industries
3. Talk to professionals in fields you're interested in
4. Consider work-life balance and salary expectations
5. Think about long-term growth opportunities

Would you like more specific guidance about a particular career path?`,
      })
    }

    // Default response for other queries
    return NextResponse.json({
      response: `Hello! I'm Apna Chat Bot, your AI assistant created by Shriyash Soni. I can help you with:

- Career guidance and counseling
- Education and college admissions
- Exam preparation strategies
- Coding and programming resources
- Entrepreneurship advice
- Information about Shriyash's ventures (Apna Counsellor, Apna Coding, ThriftFlex)
- Contact information

Feel free to ask me about any of these topics! How can I assist you today?`,
    })
  } catch (error) {
    console.error("Error in fallback API route:", error)
    return NextResponse.json({
      response:
        "I'm Apna Chat Bot, your AI assistant. I'm here to help with career guidance, academic advice, and personal development. How can I assist you today?",
    })
  }
}
