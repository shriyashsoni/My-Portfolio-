"use client"

import type React from "react"
import { createContext, useState, useContext, useCallback } from "react"
import { v4 as uuidv4 } from "uuid"
import type { ChatContextType, ChatMessage } from "./types"

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uuidv4(),
      role: "system",
      content:
        "You are Apna Chat Bot, a helpful AI assistant created by Shriyash Soni. You are designed to provide personalized guidance, career counseling, academic help, and general support to users. You are knowledgeable about Indian education systems, career paths, exams, universities, and tech skills. You are friendly, conversational, and helpful. You can communicate in English, Hindi, and other regional Indian languages.",
    },
    {
      id: uuidv4(),
      role: "assistant",
      content:
        "👋 Hi there! I'm Apna Chat Bot, your AI assistant created by Shriyash Soni. How can I help you today? Feel free to ask me about career guidance, academic questions, or anything else you'd like to know!",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState("")

  const addMessage = useCallback((message: Omit<ChatMessage, "id">) => {
    setMessages((prev) => [...prev, { ...message, id: uuidv4() }])
  }, [])

  const resetChat = useCallback(() => {
    setMessages([
      {
        id: uuidv4(),
        role: "system",
        content:
          "You are Apna Chat Bot, a helpful AI assistant created by Shriyash Soni. You are designed to provide personalized guidance, career counseling, academic help, and general support to users. You are knowledgeable about Indian education systems, career paths, exams, universities, and tech skills. You are friendly, conversational, and helpful. You can communicate in English, Hindi, and other regional Indian languages.",
      },
      {
        id: uuidv4(),
        role: "assistant",
        content:
          "👋 Hi there! I'm Apna Chat Bot, your AI assistant created by Shriyash Soni. How can I help you today? Feel free to ask me about career guidance, academic questions, or anything else you'd like to know!",
      },
    ])
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    addMessage(userMessage)
    setInput("")
    setIsLoading(true)

    try {
      // Use only the mock API since the Gemini API is not working
      const response = await fetch("/api/chat/mock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
        }),
      })

      const data = await response.json()

      // Add assistant response
      addMessage({
        role: "assistant",
        content: data.response,
      })
    } catch (error) {
      console.error("Error sending message:", error)
      addMessage({
        role: "assistant",
        content:
          "I'm sorry, I encountered an error while processing your request. Please try again later or contact support if the issue persists.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        isLoading,
        input,
        setInput,
        handleSubmit,
        resetChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}
