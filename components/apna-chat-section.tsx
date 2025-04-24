"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Brain, MessageSquare, Zap, Globe, Sparkles } from "lucide-react"

export function ApnaChatSection() {
  return (
    <section id="apna-chat" className="py-20 bg-white dark:bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apna Chat</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My AI-powered chatbot for personalized assistance
          </p>
          <Badge className="mt-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
            Powered by Local AI
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Building My Custom AI Chatbot</h3>
            <p className="text-gray-700 dark:text-gray-300">
              In today's AI-driven world, building smart, conversational chatbots is no longer just a tech trend—it's a
              necessity. To create a powerful, intelligent, and responsive chatbot, I developed a custom solution that
              provides personalized guidance and support.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Apna Chat Bot uses a specialized local AI model trained on my specific knowledge domains, providing
              natural language understanding, contextual awareness, and personalized responses. With my custom AI
              solution, I've been awareness, and personalized responses. With my custom AI solution, I've been able to:
            </p>

            <ul className="space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>
                Create a chatbot with domain-specific knowledge about education, career counseling, and technology
              </li>
              <li>Ensure accurate and helpful responses even without external API dependencies</li>
              <li>Integrate the bot seamlessly into my website for a unified user experience</li>
              <li>Provide personalized assistance for visitors interested in my ventures and services</li>
            </ul>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                Try It Yourself!
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Apna Chat Bot is live on this website! Look for the chat icon in the bottom right corner of your screen
                to start a conversation.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Ask about career guidance, academic help, or just chat about anything you'd like to know!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 border-2 border-indigo-200 dark:border-indigo-800 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <Bot className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-center mb-6">Key Features</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-[#1E293B] p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h4 className="font-semibold">Domain Knowledge</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Specialized in education and career guidance
                    </p>
                  </div>

                  <div className="bg-white dark:bg-[#1E293B] p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 text-violet-600 dark:text-violet-400 mr-2" />
                      <h4 className="font-semibold">Natural Conversations</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Human-like interactions with context awareness
                    </p>
                  </div>

                  <div className="bg-white dark:bg-[#1E293B] p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h4 className="font-semibold">Real-time Processing</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Instant responses with minimal latency</p>
                  </div>

                  <div className="bg-white dark:bg-[#1E293B] p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Globe className="h-5 w-5 text-violet-600 dark:text-violet-400 mr-2" />
                      <h4 className="font-semibold">Multilingual</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Supports English, Hindi, and regional languages
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                      Local AI
                    </Badge>
                    <Badge className="bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
                      Next.js
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                      React
                    </Badge>
                    <Badge className="bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
                      TypeScript
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                      Tailwind CSS
                    </Badge>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90"
                    onClick={() => {
                      const chatElement = document.querySelector(".fixed.bottom-4.right-4") as HTMLElement
                      if (chatElement) {
                        // Find and click the expand button
                        const expandButton = chatElement.querySelector("button:last-child") as HTMLButtonElement
                        if (expandButton) {
                          expandButton.click()
                        }
                      }
                    }}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" /> Try Apna Chat Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
