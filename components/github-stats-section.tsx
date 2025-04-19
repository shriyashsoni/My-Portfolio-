"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Github, Code } from "lucide-react"
import Link from "next/link"

export function GitHubStatsSection() {
  return (
    <section id="github" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Stats</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Check out my open-source contributions and coding activity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Github className="mr-2 h-5 w-5" /> GitHub Activity
                </h3>
                <div className="aspect-video relative">
                  <Image
                    src="https://github-readme-stats.vercel.app/api?username=shriyashsoni&show_icons=true&theme=radical"
                    alt="GitHub Stats"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5" /> Top Languages
                </h3>
                <div className="aspect-video relative">
                  <Image
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=shriyashsoni&layout=compact&theme=radical"
                    alt="Top Languages"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://github.com/shriyashsoni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            <Github className="mr-2 h-5 w-5" /> View GitHub Profile
          </Link>
        </div>
      </div>
    </section>
  )
}
