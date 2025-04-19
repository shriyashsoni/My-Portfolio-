import { type NextRequest, NextResponse } from "next/server"

// A more comprehensive mock response system
export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "No prompt provided" }, { status: 400 })
    }

    const promptLower = prompt.toLowerCase()

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

    // College/education responses
    if (
      promptLower.includes("college") ||
      promptLower.includes("university") ||
      promptLower.includes("education") ||
      promptLower.includes("school") ||
      promptLower.includes("admission")
    ) {
      return NextResponse.json({
        response: `When choosing a college or university, consider these important factors:

1. Academic reputation and accreditation
2. Available programs and specializations
3. Faculty expertise and teaching quality
4. Campus facilities and resources
5. Location and environment
6. Cost and financial aid options
7. Placement records and industry connections
8. Student life and extracurricular opportunities

For admissions in India, prepare for entrance exams like JEE, NEET, CLAT, CAT, or other relevant tests depending on your field of interest.

Through Apna Counsellor, Shriyash has helped many students secure admissions to their preferred institutions. Would you like specific information about any particular college or entrance exam?`,
      })
    }

    // Exam preparation responses
    if (
      promptLower.includes("exam") ||
      promptLower.includes("test") ||
      promptLower.includes("preparation") ||
      promptLower.includes("study") ||
      promptLower.includes("jee") ||
      promptLower.includes("neet")
    ) {
      return NextResponse.json({
        response: `Effective exam preparation strategies include:

1. Create a structured study plan with daily goals
2. Use active learning techniques (practice problems, flashcards)
3. Take regular practice tests under timed conditions
4. Form study groups for collaborative learning
5. Use quality study materials and resources
6. Take care of your physical and mental health
7. Review and revise regularly
8. Focus on understanding concepts, not just memorization

For competitive exams like JEE, NEET, or others, start preparation early and consider joining coaching if needed.

Would you like specific tips for a particular exam you're preparing for?`,
      })
    }

    // Coding/programming responses
    if (
      promptLower.includes("coding") ||
      promptLower.includes("programming") ||
      promptLower.includes("developer") ||
      promptLower.includes("software") ||
      promptLower.includes("web") ||
      promptLower.includes("app")
    ) {
      return NextResponse.json({
        response: `For learning coding and programming, here are some recommendations:

1. Start with fundamentals: HTML, CSS, JavaScript for web development or Python for general programming
2. Use online learning platforms like Codecademy, freeCodeCamp, or Coursera
3. Build projects to apply what you learn
4. Join coding communities like GitHub, Stack Overflow, or Discord groups
5. Practice problem-solving on platforms like LeetCode or HackerRank
6. Learn version control with Git
7. Explore frameworks based on your interests (React, Angular, Django, etc.)

Apna Coding, founded by Shriyash Soni, offers courses and resources for aspiring programmers. The platform focuses on practical skills and real-world applications.

What specific programming area are you interested in?`,
      })
    }

    // Entrepreneurship responses
    if (
      promptLower.includes("startup") ||
      promptLower.includes("business") ||
      promptLower.includes("entrepreneur") ||
      promptLower.includes("company") ||
      promptLower.includes("venture")
    ) {
      return NextResponse.json({
        response: `For aspiring entrepreneurs, here's some guidance:

1. Identify a problem worth solving or a gap in the market
2. Validate your idea through market research and customer feedback
3. Create a minimum viable product (MVP) to test your concept
4. Develop a solid business plan and financial model
5. Build a diverse and skilled team
6. Seek mentorship from experienced entrepreneurs
7. Explore funding options (bootstrapping, angel investors, VCs)
8. Focus on customer acquisition and retention

Shriyash Soni has founded multiple ventures including Apna Counsellor, Apna Coding, and ThriftFlex, gaining recognition at events like Shark Tank 3.0 and IIT Bombay's E-Summit.

What specific aspect of entrepreneurship are you interested in?`,
      })
    }

    // Music responses
    if (
      promptLower.includes("music") ||
      promptLower.includes("song") ||
      promptLower.includes("singing") ||
      promptLower.includes("spotify") ||
      promptLower.includes("artist")
    ) {
      return NextResponse.json({
        response: `Shriyash Soni is also a musician with several songs available on platforms like Spotify and Apple Music. Some of his tracks include:

- Mitti Ton Vibe
- F* College
- Echoes of Swag
- Frostveil Reverie
- DILRISH

You can find his music on Spotify by searching for "Shriyash Soni" or visiting his artist page.

Are you interested in music production, singing, or just listening to good music?`,
      })
    }

    // About Shriyash responses
    if (
      promptLower.includes("shriyash") ||
      promptLower.includes("about you") ||
      promptLower.includes("your background") ||
      promptLower.includes("founder") ||
      promptLower.includes("who are you")
    ) {
      return NextResponse.json({
        response: `Shriyash Soni is an entrepreneur, software engineer, counselor, and musician from Jabalpur, Madhya Pradesh, India.

He has founded multiple ventures:
- Apna Counsellor: A career counseling platform that has helped 120+ students with admissions
- Apna Coding: A global coding platform offering courses and hackathons
- ThriftFlex: An e-commerce thrift store for sustainable shopping

His achievements include:
- Finalist at Shark Tank 3.0 @ Gyan Ganga
- Selected at IIT Bombay E-Summit 2025
- Shortlisted at IIT Hyderabad - Fetching Fortunes
- Speaker at Google DevFest 2024
- Partnership with STEM4Youth USA

He's currently pursuing B.Tech in Data Science at RGPV University and has skills in Python, JavaScript, AI, Machine Learning, and Cybersecurity.

What specific aspect of Shriyash's journey would you like to know more about?`,
      })
    }

    // Contact information responses
    if (
      promptLower.includes("contact") ||
      promptLower.includes("email") ||
      promptLower.includes("phone") ||
      promptLower.includes("reach") ||
      promptLower.includes("connect")
    ) {
      return NextResponse.json({
        response: `You can contact Shriyash Soni through:

- Email: sonishriyash@gmail.com
- Phone: +91 8989976990
- Location: Jabalpur, Madhya Pradesh

You can also connect with him on social media:
- Instagram: @sonishriyash
- LinkedIn: linkedin.com/in/shriyash-soni
- GitHub: github.com/shriyashsoni
- YouTube: youtube.com/channel/SHRIYASHSONI_2005

For business inquiries or collaboration opportunities, email is the best way to reach him.`,
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
    console.error("Error in mock API route:", error)
    return NextResponse.json({
      response:
        "I'm Apna Chat Bot, your AI assistant. I'm here to help with career guidance, academic advice, and personal development. How can I assist you today?",
    })
  }
}
