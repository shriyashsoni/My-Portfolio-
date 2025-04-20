"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, Sparkles } from "lucide-react"
import { useChat } from "./chat-context"
import { Badge } from "@/components/ui/badge"

// Suggestion chips for common queries
const SUGGESTIONS = [
  "Tell me about Apna Coding",
  "Career guidance for tech",
  "College admission help",
  "Programming resources",
  "Contact Shriyash",
  "About Shriyash Soni",
]

export function ChatInput() {
  const { input, setInput, handleSubmit, isLoading } = useChat()
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const [showSuggestions, setShowSuggestions] = useState(true)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setShowSuggestions(false)
    // Focus the textarea
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  // Safe input handling
  const safeInput = typeof input === "string" ? input : ""

  return (
    <div className="w-full space-y-4">
      {showSuggestions && (
        <div className="flex flex-wrap gap-2 mb-2 animate-fade-in">
          {SUGGESTIONS.map((suggestion) => (
            <Badge
              key={suggestion}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/50 cursor-pointer transition-all px-3 py-1.5 text-sm"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <Sparkles className="h-3 w-3 mr-1" />
              {suggestion}
            </Badge>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-end gap-2 w-full">
        <Textarea
          ref={textareaRef}
          placeholder="Type your message..."
          value={safeInput}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(false)}
          onBlur={() => setShowSuggestions(safeInput.length === 0)}
          className="min-h-[60px] resize-none rounded-lg border border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          className="h-[60px] w-[60px] rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-opacity"
          disabled={isLoading || !safeInput.trim()}
        >
          {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        </Button>
      </form>
    </div>
  )
}
