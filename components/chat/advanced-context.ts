// Advanced context system for the chatbot
export interface ContextItem {
  topic: string
  keywords: string[]
  lastMentioned: number // timestamp
  relevance: number // 0-1
}

export class ChatContext {
  private contextItems: ContextItem[] = []
  private shortTermMemory: string[] = [] // Recent messages
  private userPreferences: Record<string, any> = {}
  private sessionStartTime: number

  constructor() {
    this.sessionStartTime = Date.now()

    // Initialize with default context items
    this.addContextItem({
      topic: "apna_coding",
      keywords: ["coding", "programming", "developer", "software", "web", "app", "apna coding"],
      lastMentioned: Date.now(),
      relevance: 0.8,
    })

    this.addContextItem({
      topic: "career_guidance",
      keywords: ["career", "job", "profession", "work", "guidance", "counseling"],
      lastMentioned: Date.now(),
      relevance: 0.7,
    })
  }

  public addContextItem(item: ContextItem): void {
    const existingIndex = this.contextItems.findIndex((i) => i.topic === item.topic)
    if (existingIndex >= 0) {
      this.contextItems[existingIndex] = {
        ...this.contextItems[existingIndex],
        ...item,
        lastMentioned: Date.now(),
      }
    } else {
      this.contextItems.push(item)
    }
  }

  public updateContext(userMessage: string): void {
    // Add to short term memory
    this.shortTermMemory.push(userMessage)
    if (this.shortTermMemory.length > 10) {
      this.shortTermMemory.shift() // Keep only last 10 messages
    }

    // Update context relevance based on keywords
    const messageLower = userMessage.toLowerCase()

    this.contextItems.forEach((item) => {
      if (item.keywords.some((keyword) => messageLower.includes(keyword))) {
        item.lastMentioned = Date.now()
        item.relevance = Math.min(item.relevance + 0.2, 1.0) // Increase relevance
      } else {
        // Gradually decrease relevance of unmentioned topics
        const timeSinceLastMention = Date.now() - item.lastMentioned
        if (timeSinceLastMention > 60000) {
          // 1 minute
          item.relevance = Math.max(item.relevance - 0.1, 0.1)
        }
      }
    })
  }

  public setUserPreference(key: string, value: any): void {
    this.userPreferences[key] = value
  }

  public getUserPreference(key: string): any {
    return this.userPreferences[key]
  }

  public getRelevantContexts(threshold = 0.5): ContextItem[] {
    return this.contextItems.filter((item) => item.relevance >= threshold).sort((a, b) => b.relevance - a.relevance)
  }

  public getSessionDuration(): number {
    return Date.now() - this.sessionStartTime
  }

  public getShortTermMemory(): string[] {
    return [...this.shortTermMemory]
  }
}
