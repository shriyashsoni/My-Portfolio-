"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Calendar } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      title: "Finalist at Shark Tank 3.0 @ Gyan Ganga",
      date: "2024",
      description: "Presented innovative business ideas and secured finalist position.",
    },
    {
      title: "Selected at IIT Bombay E-Summit 2025",
      date: "2025",
      description: "Recognized for entrepreneurial potential at one of India's premier startup events.",
    },
    {
      title: "Shortlisted at IIT Hyderabad - Fetching Fortunes",
      date: "2024",
      description: "Business idea shortlisted among competitive applications.",
    },
    {
      title: "Selected at Innovest 2025",
      date: "2025",
      description: "Recognized for innovative approach and business acumen.",
    },
    {
      title: "Speaker at Google DevFest 2024",
      date: "2024",
      description: "Invited to share insights and expertise at Google's developer festival.",
    },
    {
      title: "Shortlisted for Pears Hackathon 2025",
      date: "2025",
      description: "Apna Coding platform recognized for its innovative approach.",
    },
    {
      title: "12+ Direct Admissions via Apna Counsellor",
      date: "2023-2024",
      description: "Successfully guided students to secure direct admissions to their desired institutions.",
    },
    {
      title: "Partnership with STEM4Youth USA",
      date: "2025",
      description: "Expanded Apna Coding's global outreach through strategic partnership.",
    },
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Milestones</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key recognitions and milestones throughout my journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block"></div>

          <div className="space-y-12 relative">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                  {index % 2 === 0 ? (
                    <Card className="w-full md:max-w-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Trophy className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{achievement.date}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="hidden md:block w-full"></div>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-start md:pl-8">
                  {index % 2 !== 0 ? (
                    <Card className="w-full md:max-w-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Trophy className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{achievement.date}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="hidden md:block w-full"></div>
                  )}
                </div>

                {/* Mobile view - always show card */}
                <div className="md:hidden w-full">
                  {index % 2 !== 0 && (
                    <Card className="w-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Trophy className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{achievement.date}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
