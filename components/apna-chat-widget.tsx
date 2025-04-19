"use client"
import { Chat } from "./chat/chat"
import { ChatProvider } from "./chat/chat-context"

export function ApnaChatWidget() {
  return (
    <ChatProvider>
      <Chat initiallyExpanded={false} />
    </ChatProvider>
  )
}
