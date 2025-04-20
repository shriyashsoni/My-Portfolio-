"use client"

import type React from "react"
import { createContext, useState, useContext, useCallback, useRef } from "react"
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
  const abortControllerRef = useRef<AbortController | null>(null)
  const [apiMode, setApiMode] = useState<"openai" | "mock">("openai") // Track which API we're using

  const addMessage = useCallback((message: Omit<ChatMessage, "id">) => {
    // Ensure message has valid content
    const content = typeof message.content === "string" ? message.content.trim() : ""
    if (content === "") {
      console.warn("Attempted to add message with invalid content:", message)
      return
    }

    setMessages((prev) => [...prev, { ...message, content, id: uuidv4() }])
  }, [])

  const resetChat = useCallback(() => {
    // Cancel any ongoing requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

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

    // Reset to OpenAI on chat reset
    setApiMode("openai")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input.trim() }
    addMessage(userMessage)
    setInput("")
    setIsLoading(true)

    // Cancel any ongoing requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Create a new AbortController for this request
    abortControllerRef.current = new AbortController()
    const signal = abortControllerRef.current.signal

    try {
      // Prepare messages for API - ensure we're only sending necessary data
      const messagesToSend = messages
        .concat(userMessage)
        .map(({ role, content }) => ({
          role,
          content: typeof content === "string" ? content : "",
        }))
        .filter((msg) => msg.content.trim() !== "") // Filter out empty messages

      // Determine which API to use
      const apiEndpoint = apiMode === "openai" ? "/api/chat/openai" : "/api/chat/mock"

      // Call our API route
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messagesToSend,
        }),
        signal,
      })

      const data = await response.json()

      // If OpenAI fails, switch to mock for next message
      if (data.error && apiMode === "openai") {
        console.log("Switching to mock API due to error:", data.error)
        setApiMode("mock")
      }

      // Add assistant response
      if (data.response && typeof data.response === "string") {
        addMessage({
          role: "assistant",
          content: data.response,
        })
      } else {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Error sending message:", error)

        // If current API fails, try the mock API
        try {
          // Always use the mock API as fallback
          const mockResponse = await fetch("/api/chat/mock", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: [{ role: "user", content: input }],
            }),
          })

          const mockData = await mockResponse.json()

          if (mockData.response && typeof mockData.response === "string") {
            addMessage({
              role: "assistant",
              content: mockData.response,
            })

            // Switch to mock mode for future messages
            setApiMode("mock")
          } else {
            throw new Error("Invalid mock response format")
          }
        } catch (fallbackError) {
          console.error("Fallback API error:", fallbackError)

          // If all else fails, use a hardcoded response
          addMessage({
            role: "assistant",
            content: "I'm sorry, I encountered an error while processing your request. Please try again later.",
          })

          // Switch to mock mode for future messages
          setApiMode("mock")
        }
      }
    } finally {
      setIsLoading(false)
      abortControllerRef.current = null
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
