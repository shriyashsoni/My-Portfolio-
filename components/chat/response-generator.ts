import type { ChatContext } from "./advanced-context"

interface ResponseTemplate {
  pattern: RegExp
  responses: string[]
  contextRequired?: string[]
  followUp?: string[]
}

export class ResponseGenerator {
  private templates: ResponseTemplate[] = []
  private context: ChatContext
  private lastResponseIndex: Record<string, number> = {}

  constructor(context: ChatContext) {
    this.context = context
    this.initializeTemplates()
  }

  private initializeTemplates(): void {
    // Apna Coding responses
    this.templates.push({
      pattern: /apna\s+coding|coding\s+community|learn\s+coding/i,
      responses: [
        `Apna Coding is a global level coding community founded by Shriyash Soni. It offers:

1. Comprehensive coding courses for beginners to advanced learners
2. Regular hackathons and coding challenges
3. Community support for aspiring developers
4. AI-powered tools to enhance learning
5. Partnerships with organizations like STEM4Youth USA

The platform focuses on practical skills and real-world applications, helping students and professionals improve their coding abilities and build impressive portfolios.`,
        `As the founder of Apna Coding, Shriyash has created a platform that bridges the gap between theoretical knowledge and practical skills in programming. The community offers:

- Structured learning paths for different programming languages
- Project-based learning opportunities
- Mentorship from experienced developers
- Networking with peers and industry professionals
- Access to exclusive resources and tools

Would you like to know more about specific courses or how to join the community?`,
      ],
      followUp: [
        "Would you like to know more about specific courses or resources available through Apna Coding?",
        "Are you interested in joining the Apna Coding community?",
        "What specific programming skills are you looking to develop?",
      ],
    })

    // Career guidance responses
    this.templates.push({
      pattern: /career|job|profession|work/i,
      responses: [
        `As a career counselor, I'd recommend exploring fields that align with your interests and strengths. 

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
5. Think about long-term growth opportunities`,
        `When planning your career path, it's important to consider both your passions and market demand. Here are some steps to help you make informed decisions:

1. Self-assessment: Identify your strengths, weaknesses, interests, and values
2. Industry research: Look into growth sectors and future trends
3. Skill development: Focus on building both technical and soft skills
4. Networking: Connect with professionals in fields of interest
5. Experimentation: Try internships or part-time roles to gain experience
6. Mentorship: Seek guidance from experienced professionals
7. Continuous learning: Stay updated with industry developments

Through Apna Counsellor, Shriyash has helped many students navigate their career journeys successfully.`,
      ],
      followUp: [
        "Would you like more specific guidance about a particular career path?",
        "Are there specific industries you're interested in exploring?",
        "Would you like to know more about career opportunities in technology or other fields?",
      ],
    })

    // Add more templates for other topics...

    // Default response
    this.templates.push({
      pattern: /.*/,
      responses: [
        `Hello! I'm Apna Chat Bot, your AI assistant created by Shriyash Soni. I can help you with:

- Career guidance and counseling
- Education and college admissions
- Exam preparation strategies
- Coding and programming resources
- Entrepreneurship advice
- Information about Shriyash's ventures (Apna Counsellor, Apna Coding, ThriftFlex)
- Contact information

Feel free to ask me about any of these topics!`,
        `Hi there! I'm your AI assistant from Apna Chat. I'm designed to provide information and assistance on various topics including:

- Career development and planning
- Educational guidance and resources
- Programming and technical skills
- Entrepreneurship and startups
- Shriyash Soni's projects and ventures

How can I assist you today?`,
      ],
      followUp: [
        "How can I assist you today?",
        "What would you like to know more about?",
        "Is there a specific topic you'd like to discuss?",
      ],
    })
  }

  public generateResponse(userMessage: string): string {
    // Update context based on user message
    this.context.updateContext(userMessage)

    // Find matching template
    let matchedTemplate: ResponseTemplate | undefined

    for (const template of this.templates) {
      if (template.pattern.test(userMessage)) {
        // Check if context requirements are met
        if (template.contextRequired) {
          const relevantContexts = this.context.getRelevantContexts().map((item) => item.topic)

          if (template.contextRequired.every((ctx) => relevantContexts.includes(ctx))) {
            matchedTemplate = template
            break
          }
        } else {
          matchedTemplate = template
          break
        }
      }
    }

    if (!matchedTemplate) {
      // Use default template as fallback
      matchedTemplate = this.templates[this.templates.length - 1]
    }

    // Select response from template (avoid repeating the same response)
    let responseIndex = this.lastResponseIndex[matchedTemplate.pattern.toString()] || 0
    responseIndex = (responseIndex + 1) % matchedTemplate.responses.length
    this.lastResponseIndex[matchedTemplate.pattern.toString()] = responseIndex

    let response = matchedTemplate.responses[responseIndex]

    // Add follow-up question if available
    if (matchedTemplate.followUp && matchedTemplate.followUp.length > 0) {
      const followUpIndex = Math.floor(Math.random() * matchedTemplate.followUp.length)
      response += "\n\n" + matchedTemplate.followUp[followUpIndex]
    }

    // Personalize response if we have user preferences
    const userName = this.context.getUserPreference("name")
    if (userName) {
      response = response.replace(/^(Hi|Hello)/, `$1 ${userName}`)
    }

    return response
  }
}
