"use client"

import React, { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCcw, Minimize2, Volume2, VolumeX } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { useChat } from "./chat-context"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface ChatProps {
  initiallyExpanded?: boolean
}

export function Chat({ initiallyExpanded = false }: ChatProps) {
  const { messages, resetChat, isLoading } = useChat()
  const [isExpanded, setIsExpanded] = React.useState(initiallyExpanded)
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const speechSynthesis = typeof window !== "undefined" ? window.speechSynthesis : null

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Filter out system messages
  const visibleMessages = messages.filter((message) => message.role !== "system")

  // Text-to-speech function
  const speakMessage = (text: string) => {
    if (speechSynthesis && isSpeechEnabled) {
      // Cancel any ongoing speech
      speechSynthesis.cancel()

      // Create a new utterance
      const utterance = new SpeechSynthesisUtterance(text)

      // Set voice (optional)
      const voices = speechSynthesis.getVoices()
      const indianVoice = voices.find((voice) => voice.lang.includes("en-IN") || voice.lang.includes("hi-IN"))
      if (indianVoice) {
        utterance.voice = indianVoice
      }

      // Set other properties
      utterance.rate = 1.0
      utterance.pitch = 1.0
      utterance.volume = 1.0

      // Speak the text
      speechSynthesis.speak(utterance)
    }
  }

  // Speak the last assistant message when it changes
  useEffect(() => {
    const lastAssistantMessage = [...visibleMessages].reverse().find((m) => m.role === "assistant")
    if (lastAssistantMessage && !isLoading) {
      speakMessage(lastAssistantMessage.content)
    }
  }, [visibleMessages, isLoading, isSpeechEnabled])

  return (
    <>
      {/* Chat button when collapsed */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white dark:border-gray-800 group"
          aria-label="Open chat"
        >
          <div
            className={`relative w-10 h-10 transition-transform duration-300 ${isButtonHovered ? "scale-110" : "scale-100"}`}
          >
            <Image src="/images/apna-coding-logo.png" alt="Apna Chat" fill className="object-contain" />
          </div>

          {/* Notification dot for new messages */}
          {visibleMessages.length > 2 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
          )}

          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg shadow-lg text-sm whitespace-nowrap">
            Chat with Apna Bot
          </div>
        </button>
      )}

      {/* Chat window */}
      {isExpanded && (
        <Card className="fixed bottom-4 right-4 z-50 shadow-lg w-[90%] md:w-[450px] h-[600px] overflow-hidden transition-all duration-300 ease-in-out">
          <CardHeader className="p-4 flex flex-row items-center justify-between border-b bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
            <div className="flex items-center">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <div className="relative w-6 h-6 mr-1">
                  <Image src="/images/apna-coding-logo.png" alt="Apna Chat" fill className="object-contain" />
                </div>
                Apna Chat Bot
              </CardTitle>
              <Badge className="ml-2 bg-white/20 text-white hover:bg-white/30">Local Model</Badge>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                onClick={() => setIsSpeechEnabled(!isSpeechEnabled)}
                title={isSpeechEnabled ? "Disable voice" : "Enable voice"}
              >
                {isSpeechEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                onClick={resetChat}
                disabled={isLoading}
                title="Reset chat"
              >
                <RefreshCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                onClick={() => setIsExpanded(false)}
                title="Minimize"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 overflow-y-auto flex-grow h-[calc(600px-132px)] bg-gray-50 dark:bg-gray-900">
            <div className="space-y-4">
              {visibleMessages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center space-x-2 opacity-70">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t bg-white dark:bg-gray-800">
            <ChatInput />
          </CardFooter>
        </Card>
      )}
    </>
  )
}
