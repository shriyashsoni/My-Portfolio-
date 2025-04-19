"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, DollarSign, Code, Shield, Terminal, Gamepad, Github } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Apna Counsellor",
      description:
        "Career counseling platform helping students navigate their educational and career paths. Developed MHT CET College Predictor for admission insights.",
      image: "/images/apna-counsellor-logo.jpeg",
      stats: [
        { icon: <Users className="h-4 w-4" />, value: "120+ Students" },
        { icon: <DollarSign className="h-4 w-4" />, value: "₹3L+ Revenue" },
      ],
      tags: ["Career Guidance", "Education", "Counseling"],
      links: [
        { label: "Website", url: "https://apnacounsellor.info", icon: <ExternalLink className="h-4 w-4" /> },
        {
          label: "GitHub",
          url: "https://github.com/shriyashsoni/MHTCET-College-Predictor",
          icon: <Github className="h-4 w-4" />,
        },
      ],
      color: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      title: "Apna Coding",
      description:
        "Global coding platform offering courses, hackathons, AI-powered tools, and job opportunities. Partnered with STEM4Youth USA.",
      image: "/images/apna-coding-logo.png",
      stats: [
        { icon: <Code className="h-4 w-4" />, value: "Multiple Hackathons" },
        { icon: <Users className="h-4 w-4" />, value: "Growing Community" },
      ],
      tags: ["Coding", "Hackathons", "AI Tools"],
      links: [
        { label: "Website", url: "https://apnacoding.tech", icon: <ExternalLink className="h-4 w-4" /> },
        { label: "GitHub", url: "https://github.com/shriyashsoni/Apna-Coding", icon: <Github className="h-4 w-4" /> },
      ],
      color: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
    },
    {
      title: "ThriftFlex",
      description: "E-commerce thrift store offering affordable and sustainable shopping options.",
      image: "/images/thriftflex.png",
      stats: [
        { icon: <DollarSign className="h-4 w-4" />, value: "Affordable Products" },
        { icon: <Users className="h-4 w-4" />, value: "Growing Customer Base" },
      ],
      tags: ["E-commerce", "Thrift", "Sustainable"],
      links: [
        { label: "Shop", url: "https://thriftflex.shop", icon: <ExternalLink className="h-4 w-4" /> },
        { label: "WhatsApp", url: "https://wa.link/n28iiu", icon: <ExternalLink className="h-4 w-4" /> },
      ],
      color: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
    {
      title: "Cyber Threat Intelligence Graph",
      description:
        "Detects malicious IPs, phishing domains, and attack patterns using ArangoDB, GraphRAG, and NVIDIA cuGraph.",
      image: "/images/cyber-threat-graph.png",
      stats: [
        { icon: <Code className="h-4 w-4" />, value: "AI-Powered" },
        { icon: <Shield className="h-4 w-4" />, value: "Cybersecurity" },
      ],
      tags: ["AI", "Cybersecurity", "GraphRAG"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/shriyashsoni/Cyber-Threat-Intelligence-Graph",
          icon: <Github className="h-4 w-4" />,
        },
      ],
      color: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      title: "Face Detection AI Game",
      description: "AI-powered interactive game that detects facial expressions to earn points.",
      image: "/images/face-detection-game.png",
      stats: [
        { icon: <Code className="h-4 w-4" />, value: "AI-Powered" },
        { icon: <Gamepad className="h-4 w-4" />, value: "Interactive" },
      ],
      tags: ["AI", "Game", "Face Detection"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/shriyashsoni/Face-Detection-Game",
          icon: <Github className="h-4 w-4" />,
        },
      ],
      color: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
    },
    {
      title: "DeepSeek-V3 & DeepSeek-Coder",
      description: "AI-powered coding assistant forked from DeepSeek-V3.",
      image: "/images/deepseek.png",
      stats: [
        { icon: <Code className="h-4 w-4" />, value: "AI-Powered" },
        { icon: <Terminal className="h-4 w-4" />, value: "Coding Assistant" },
      ],
      tags: ["AI", "Coding", "LLM"],
      links: [
        {
          label: "GitHub V3",
          url: "https://github.com/shriyashsoni/DeepSeek-V3",
          icon: <Github className="h-4 w-4" />,
        },
        {
          label: "GitHub Coder",
          url: "https://github.com/shriyashsoni/DeepSeek-Coder",
          icon: <Github className="h-4 w-4" />,
        },
      ],
      color: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient inline-block">Projects & Startups</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my entrepreneurial ventures and innovative projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} className="card-hover-effect">
              <Card className={`overflow-hidden border-2 ${project.borderColor} h-full flex flex-col`}>
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-teal-500/10"></div>
                </div>
                <CardContent className={`p-6 ${project.color} flex-grow`}>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-white/50 dark:bg-gray-800/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        {stat.icon}
                        <span>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex flex-wrap gap-2">
                  {project.links.map((link, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                        <span className="ml-2">{link.label}</span>
                      </Link>
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
