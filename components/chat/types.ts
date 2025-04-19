import type React from "react"
export type Role = "user" | "assistant" | "system"

export interface ChatMessage {
  role: Role
  content: string
  id: string
}

export interface ChatContextType {
  messages: ChatMessage[]
  addMessage: (message: Omit<ChatMessage, "id">) => void
  isLoading: boolean
  input: string
  setInput: (input: string) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetChat: () => void
}
