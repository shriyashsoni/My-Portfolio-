"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Calendar, Mail, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function CommunitySection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail("")
  }

  const upcomingEvents = [
    {
      title: "Hackathon: Code for Change",
      date: "June 15-16, 2025",
      description: "A 48-hour coding challenge to build solutions for social impact.",
      link: "#",
    },
    {
      title: "Workshop: AI in Education",
      date: "July 5, 2025",
      description: "Learn how AI is transforming the education landscape.",
      link: "#",
    },
    {
      title: "Career Counseling Webinar",
      date: "July 20, 2025",
      description: "Free webinar on navigating career choices after graduation.",
      link: "#",
    },
  ]

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community & Events</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community and stay updated with upcoming events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Join Our Community</h3>
            <Card className="mb-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Apna Coding WhatsApp Group</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Join our vibrant community of coders, entrepreneurs, and creators. Get access to exclusive
                      resources, events, and networking opportunities.
                    </p>
                    <Button asChild>
                      <Link
                        href="https://chat.whatsapp.com/HqVg4ctR6QKJnfvemsEQ8H"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join WhatsApp Group <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{event.date}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">{event.description}</p>
                        <Button asChild variant="outline" size="sm">
                          <Link href={event.link}>
                            Learn More <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Subscribe to Newsletter</h3>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Stay Updated</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Subscribe to our newsletter to receive updates on new projects, events, and exclusive content.
                    </p>
                  </div>
                </div>

                {isSubscribed ? (
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
                    <h4 className="text-lg font-bold text-green-800 dark:text-green-400 mb-2">
                      Thank You for Subscribing!
                    </h4>
                    <p className="text-green-700 dark:text-green-300">
                      You've been added to our newsletter. Look out for exciting updates in your inbox!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <label htmlFor="newsletter-email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                      "Apna Counsellor helped me secure admission to my dream college. Shriyash's guidance was
                      invaluable throughout the process."
                    </p>
                    <p className="font-semibold">- Rahul S., Engineering Student</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                      "The hackathon organized by Apna Coding was a game-changer for me. I learned so much and even
                      secured an internship through the connections I made."
                    </p>
                    <p className="font-semibold">- Priya M., Computer Science Student</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
