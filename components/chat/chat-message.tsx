"use client"

import type { ChatMessage as ChatMessageType } from "./types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"

interface ChatMessageProps {
  message: ChatMessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"
  const [isVisible, setIsVisible] = useState(false)

  // Animation effect when message appears
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "flex w-full items-start gap-4 py-4 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-violet-500 p-0.5 animate-pulse-slow">
          <AvatarImage src="/images/apna-bot-icon.png" alt="Apna Chat Bot" />
          <AvatarFallback className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "flex max-w-[80%] flex-col gap-2 rounded-lg px-4 py-3 shadow-md transition-all duration-300",
          isUser
            ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
          isVisible && "transform-none",
          !isVisible && (isUser ? "translate-x-4" : "-translate-x-4"),
        )}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
      {isUser && (
        <Avatar className="h-8 w-8 bg-gradient-to-br from-violet-500 to-indigo-500 p-0.5">
          <AvatarFallback className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
