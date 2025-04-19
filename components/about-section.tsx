"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Award, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, education, and journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/shriyash-about.jpeg" alt="Shriyash Soni" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Born in Jabalpur, Madhya Pradesh, I'm a passionate software engineer, entrepreneur, and content creator,
              driven by innovation in AI, cybersecurity, and education. I founded Apna Counsellor and Apna Coding,
              empowering students and developers globally. I specialize in full-stack development, AI-powered
              applications, and startup growth.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              I have built AI-based cybersecurity tools, interactive games, and college prediction systems, participated
              in global hackathons, and pitched my startup at IIT Bombay, IIT Hyderabad, and Innovest 2025.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <GraduationCap className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      B.Tech in Data Science, 1st Year, RGPV University
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Kendriya Vidyalaya, Jabalpur</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Briefcase className="h-6 w-6 text-violet-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Entrepreneurship</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Founder of Apna Counsellor</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Founder of Apna Coding</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Founder of ThriftFlex</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Creator of Apna Chat</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Award className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Recognition</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Speaker at Google DevFest 2024</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Finalist at Shark Tank 3.0 @ Gyan Ganga</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-violet-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mumbai, Maharashtra</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Originally from Jabalpur, MP</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
