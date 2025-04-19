"use client"

import React, { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCcw, Minimize2, Maximize2 } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { useChat } from "./chat-context"

interface ChatProps {
  initiallyExpanded?: boolean
}

export function Chat({ initiallyExpanded = false }: ChatProps) {
  const { messages, resetChat, isLoading } = useChat()
  const [isExpanded, setIsExpanded] = React.useState(initiallyExpanded)
  const [error, setError] = React.useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Filter out system messages
  const visibleMessages = messages.filter((message) => message.role !== "system")

  return (
    <Card
      className={`fixed bottom-4 right-4 z-50 shadow-lg transition-all duration-300 ${
        isExpanded ? "w-[90%] md:w-[450px] h-[600px]" : "w-[300px] h-[60px]"
      }`}
    >
      <CardHeader className="p-4 flex flex-row items-center justify-between border-b">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          Apna Chat Bot
        </CardTitle>
        <div className="flex items-center gap-1">
          {isExpanded && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={resetChat}
              disabled={isLoading}
            >
              <RefreshCcw className="h-4 w-4" />
              <span className="sr-only">Reset chat</span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            <span className="sr-only">{isExpanded ? "Minimize" : "Expand"}</span>
          </Button>
        </div>
      </CardHeader>

      {isExpanded && (
        <>
          <CardContent className="p-4 overflow-y-auto flex-grow h-[calc(600px-132px)]">
            <div className="space-y-4">
              {visibleMessages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <ChatInput />
          </CardFooter>
        </>
      )}
    </Card>
  )
}
