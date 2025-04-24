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
      promptLower.includes("learn coding") ||
      promptLower.includes("programming")
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
      promptLower.includes("work") ||
      promptLower.includes("counsellor") ||
      promptLower.includes("counselor")
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

    // Education responses
    if (
      promptLower.includes("education") ||
      promptLower.includes("college") ||
      promptLower.includes("university") ||
      promptLower.includes("school") ||
      promptLower.includes("course") ||
      promptLower.includes("degree")
    ) {
      return NextResponse.json({
        response: `Education is a crucial investment in your future. When considering educational options in India, you have several paths:

1. **Universities and Colleges**: Traditional degree programs in various disciplines
2. **Technical Institutions**: IITs, NITs, and other engineering colleges
3. **Medical Colleges**: AIIMS, JIPMER, and other medical institutions
4. **Management Institutes**: IIMs and other business schools
5. **Online Learning**: Platforms like Coursera, edX, and Udemy
6. **Vocational Training**: Skill-based programs for specific careers

Through Apna Counsellor, Shriyash has helped many students navigate the complex admission processes and find the right educational fit.

What specific aspect of education are you interested in learning more about?`,
      })
    }

    // About Shriyash responses
    if (
      promptLower.includes("shriyash") ||
      promptLower.includes("founder") ||
      promptLower.includes("about you") ||
      promptLower.includes("who are you")
    ) {
      return NextResponse.json({
        response: `Shriyash Soni is an entrepreneur, coder, counsellor, and musician. He's the founder of multiple ventures:

1. **Apna Counsellor**: A career guidance platform that has helped 120+ students with college admissions
2. **Apna Coding**: A global coding community offering courses, hackathons, and resources
3. **ThriftFlex**: An e-commerce thrift store for affordable shopping

He's been recognized at various events including:
- Finalist at Shark Tank 3.0 @ Gyan Ganga
- Selected at IIT Bombay E-Summit 2025
- Shortlisted at IIT Hyderabad - Fetching Fortunes
- Speaker at Google DevFest 2024

Shriyash is passionate about education, technology, and helping others achieve their goals.

Is there something specific about Shriyash or his ventures you'd like to know?`,
      })
    }

    // Technology responses
    if (
      promptLower.includes("technology") ||
      promptLower.includes("tech") ||
      promptLower.includes("ai") ||
      promptLower.includes("artificial intelligence") ||
      promptLower.includes("machine learning") ||
      promptLower.includes("data science")
    ) {
      return NextResponse.json({
        response: `Technology is rapidly evolving, with several key trends shaping our future:

1. **Artificial Intelligence**: Transforming industries through automation and intelligent systems
2. **Machine Learning**: Enabling computers to learn from data and improve over time
3. **Blockchain**: Revolutionizing transactions and digital ownership
4. **Quantum Computing**: Solving complex problems beyond classical computing capabilities
5. **Extended Reality (XR)**: Blending physical and digital worlds through AR, VR, and MR
6. **Internet of Things (IoT)**: Connecting everyday devices to the internet

Shriyash has worked on several technology projects, including AI-based cybersecurity tools and face detection applications.

What specific technology are you interested in learning more about?`,
      })
    }

    // Music responses
    if (
      promptLower.includes("music") ||
      promptLower.includes("song") ||
      promptLower.includes("spotify") ||
      promptLower.includes("apple music") ||
      promptLower.includes("singing")
    ) {
      return NextResponse.json({
        response: `Shriyash Soni is also a musician with several songs available on streaming platforms. Some of his tracks include:

1. "Mitti Ton Vibe"
2. "F* College"
3. "Echoes of Swag"
4. "Frostveil Reverie"
5. "DILRISH"

You can find his music on:
- Spotify: https://open.spotify.com/artist/1ta8ePiJQ0t0zuybrppurf
- Apple Music: https://music.apple.com/in/artist/shriyash-soni/1781419052

His music spans various genres and showcases his creative expression beyond technology and entrepreneurship.

Would you like to know more about his musical journey or specific songs?`,
      })
    }

    // Contact responses
    if (
      promptLower.includes("contact") ||
      promptLower.includes("email") ||
      promptLower.includes("phone") ||
      promptLower.includes("reach") ||
      promptLower.includes("connect")
    ) {
      return NextResponse.json({
        response: `You can contact Shriyash Soni through the following channels:

- **Email**: sonishriyash@gmail.com
- **Phone**: +91 8989976990
- **Location**: Jabalpur, Madhya Pradesh

You can also connect with him on social media:
- Instagram: @sonishriyash
- LinkedIn: linkedin.com/in/shriyash-soni
- GitHub: github.com/shriyashsoni
- YouTube: youtube.com/channel/SHRIYASHSONI_2005

Feel free to reach out for collaborations, questions, or just to connect!`,
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
