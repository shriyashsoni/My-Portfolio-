"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
import Link from "next/link"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-gradient-text">Resume & CV</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my resume or view it online.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-gradient">Shriyash Soni</h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Jabalpur, Madhya Pradesh, India • sonishriyash@gmail.com •{" "}
                    <Link
                      href="https://linkedin.com/in/ShriyashSoni"
                      className="text-purple-600 hover:underline"
                      target="_blank"
                    >
                      linkedin/ShriyashSoni
                    </Link>{" "}
                    •{" "}
                    <Link
                      href="https://linktr.ee/Shriyash_soni"
                      className="text-purple-600 hover:underline"
                      target="_blank"
                    >
                      Linktree
                    </Link>
                  </p>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">SUMMARY</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    A driven software engineer and entrepreneur passionate about leveraging AI, cybersecurity, and
                    education to build innovative solutions. Founder of Apna Counsellor and Apna Coding, with expertise
                    in full-stack development, AI-based applications, and scaling startups globally. Aiming to
                    continuously develop impactful products and empower the next generation of tech enthusiasts.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">EXPERIENCE</h2>

                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold">Founder</h3>
                      <span className="text-gray-600 dark:text-gray-400">2024 – Present</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-md font-medium text-teal-600 dark:text-teal-400">Apna Counsellor</h4>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Offered career counseling and college admission services to 120+ students.</li>
                      <li>Developed an MHT CET College Predictor, streamlining college admissions for students.</li>
                      <li>Earned ₹3,00,000+ from management quota admissions.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold">Founder</h3>
                      <span className="text-gray-600 dark:text-gray-400">2025 – Present</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-md font-medium text-teal-600 dark:text-teal-400">Apna Coding</h4>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Built a global coding platform providing courses, hackathons, and AI tools.</li>
                      <li>Partnered with STEM4Youth USA and expanded outreach.</li>
                      <li>Shortlisted for Pears Hackathon 2025.</li>
                    </ul>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">PROJECTS</h2>

                  <div className="mb-3">
                    <h3 className="text-lg font-semibold">Cyber Threat Intelligence Graph</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <Link
                        href="https://github.com/shriyashsoni/Cyber-Threat-Intelligence-Graph"
                        className="text-purple-600 hover:underline"
                        target="_blank"
                      >
                        GitHub: Cyber-Threat-Intelligence-Graph
                      </Link>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Detects malicious IPs, phishing domains, and attack patterns using ArangoDB, GraphRAG, and NVIDIA
                      cuGraph.
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-lg font-semibold">Face Detection AI Game</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <Link
                        href="https://github.com/shriyashsoni/Face-Detection-Game"
                        className="text-purple-600 hover:underline"
                        target="_blank"
                      >
                        GitHub: Face-Detection-Game
                      </Link>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      An interactive game using AI to detect facial expressions.
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-lg font-semibold">MHT CET College Predictor</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Apna Counsellor •{" "}
                      <Link
                        href="https://apnacounsellor.info"
                        className="text-purple-600 hover:underline"
                        target="_blank"
                      >
                        Website
                      </Link>{" "}
                      •{" "}
                      <Link
                        href="https://github.com/shriyashsoni/MHTCET-College-Predictor"
                        className="text-purple-600 hover:underline"
                        target="_blank"
                      >
                        GitHub: MHTCET-College-Predictor
                      </Link>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      A college predictor tool based on MHT CET percentile data.
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-lg font-semibold">Apna Coding – Global Coding Platform</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Apna Coding •{" "}
                      <Link
                        href="https://github.com/shriyashsoni/Apna-Coding"
                        className="text-purple-600 hover:underline"
                        target="_blank"
                      >
                        GitHub: Apna-Coding
                      </Link>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Offers online courses, hackathons, and AI-powered tools.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">DeepSeek-V3 & DeepSeek-Coder</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <Link
                        href="https://github.com/shriyashsoni/DeepSeek-V3"
                        className="text-purple-600 hover:underline"
                        target="_blank"
                      >
                        GitHub: DeepSeek-V3
                      </Link>{" "}
                      •{" "}
                      <Link
                        href="https://github.com/shriyashsoni/DeepSeek-Coder"
                        className="text-purple-600 hover:underline"
                        target="_blank"
                      >
                        GitHub: DeepSeek-Coder
                      </Link>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">AI-powered coding assistant.</p>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">EDUCATION</h2>
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold">B.Tech in Data Science</h3>
                      <span className="text-gray-600 dark:text-gray-400">2024 – 2028</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">RGPV University • Madhya Pradesh</p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">CERTIFICATIONS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <h3 className="text-md font-semibold">Data Engineering Foundation</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">GenAI Christmas Edition</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">Python Crash Course</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">AI For Impact APAC Hackathon 2024</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">Shark Tank Finalist Certification</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">Certificate of Participation in Unstop Innovatex</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">Applying AI Principles with Google Cloud</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">Introduction to Generative AI</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">Introduction to Large Language Models</h3>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold">Introduction to Responsible AI</h3>
                    </div>
                  </div>
                </div>

                {/* Awards & Honors */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">AWARDS & HONORS</h2>

                  <div className="mb-3">
                    <h3 className="text-lg font-semibold">Shark Tank 3.0</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gyan Ganga Institute of Technology</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Finalist – Shark Tank 3.0 (Gyan Ganga Institute of Technology).
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-lg font-semibold">Pears Hackathon</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Apna Coding</p>
                    <p className="text-gray-700 dark:text-gray-300">Shortlisted – Pears Hackathon (Apna Coding).</p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-lg font-semibold">Fetching Fortunes</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">IIT Hyderabad</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Selected – Fetching Fortunes (IIT Hyderabad, Round 2).
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-lg font-semibold">E-Summit</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">IIT Bombay</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Pitching – IIT Bombay's E-Summit 2025 (Apna Counsellor).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Apna Counsellor</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Innovest</p>
                    <p className="text-gray-700 dark:text-gray-300">Representing – Apna Counsellor at Innovest 2025.</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">SKILLS</h2>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Technical:</span> Python, JavaScript, C++, HTML5, CSS3, MySQL, Deep
                      Learning, ArangoDB, NVIDIA cuGraph, Machine Learning
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Security:</span> Cyber Threat Intelligence, Anomaly Detection,
                      GraphRAG
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Development:</span> Web & App Development, Open-Source Contributions
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Business:</span> Business Development, Fundraising, Marketing
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Other:</span> YouTube, Blogging, Video Editing, English, Hindi,
                      Punjabi
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-teal-500 hover:opacity-90 transition-opacity"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                View Full Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-400 dark:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
