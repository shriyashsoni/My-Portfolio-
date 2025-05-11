"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Users,
  DollarSign,
  Code,
  Shield,
  Terminal,
  Gamepad,
  Github,
  BookOpen,
  Brain,
  Database,
  Coins,
} from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Peerly",
      description:
        "A community-driven platform that connects students and professionals for skill-based learning, mentorship, and collaboration. It allows users to engage in 1-on-1 sessions, join learning circles, exchange skills, solve doubts in real time, and grow together.",
      image: "/images/peerly.jpeg",
      stats: [
        { icon: <Users className="h-4 w-4" />, value: "P2P Learning" },
        { icon: <BookOpen className="h-4 w-4" />, value: "Mentorship" },
      ],
      tags: ["Education", "Community", "Mentorship"],
      links: [
        { label: "GitHub", url: "https://github.com/shriyashsoni/peerlyp", icon: <Github className="h-4 w-4" /> },
      ],
      color: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      title: "DeFAI",
      description:
        "An AI-powered DeFi credit scoring and loan system that leverages smart contracts to provide verifiable loans on the blockchain. It integrates Chainlink oracles for real-time price feeds and stablecoin transactions, ensuring a transparent and trustless lending system.",
      image: "/images/defai.png",
      stats: [
        { icon: <Brain className="h-4 w-4" />, value: "AI-Powered" },
        { icon: <Coins className="h-4 w-4" />, value: "DeFi" },
      ],
      tags: ["Blockchain", "AI", "Finance"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/shriyashsoni/AI-x-DeFi--DeFAI--Track",
          icon: <Github className="h-4 w-4" />,
        },
      ],
      color: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      title: "Apna Coding AI Agent",
      description:
        "An intelligent AI-powered assistant built as part of Microsoft's Hack Together 2025 – AI Agents Hackathon. This project demonstrates a fully functional, agentic solution using modern AI agent frameworks, designed to assist users in coding, debugging, and learning across Python, C#, Java, and JavaScript ecosystems.",
      image: "/images/apna-coding-ai-agent.png",
      stats: [
        { icon: <Brain className="h-4 w-4" />, value: "AI Agent" },
        { icon: <Code className="h-4 w-4" />, value: "Multi-language Support" },
      ],
      tags: ["AI", "Coding", "Education"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/shriyashsoni/Apna-Coding-AI-Agent",
          icon: <Github className="h-4 w-4" />,
        },
      ],
      color: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      title: "Event Hub",
      description:
        "A modern full-stack Web2 platform where users can view, filter, and submit upcoming college tech events like hackathons, tech talks, and workshops. The app supports both manual event submissions and mock-scraped event data, helping students and developers stay updated with real opportunities.",
      image: "/images/event-hub.png",
      stats: [
        { icon: <Users className="h-4 w-4" />, value: "Event Aggregator" },
        { icon: <Code className="h-4 w-4" />, value: "Full-Stack" },
      ],
      tags: ["Web2", "Events", "Education"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/shriyashsoni/Event-Hub-Web-2",
          icon: <Github className="h-4 w-4" />,
        },
      ],
      color: "bg-gray-50 dark:bg-gray-900/20",
      borderColor: "border-gray-200 dark:border-gray-800",
    },
    {
      title: "ZoraMuse",
      description:
        "A cutting-edge platform that blends artificial intelligence with Zora's Coins Protocol to revolutionize how digital assets are created, curated, and traded. Whether you're a creator, collector, or curator, ZoraMuse offers a suite of AI tools designed to supercharge your Web3 experience.",
      image: "/images/zoramuse.png",
      stats: [
        { icon: <Brain className="h-4 w-4" />, value: "AI-Enhanced" },
        { icon: <Coins className="h-4 w-4" />, value: "Web3" },
      ],
      tags: ["NFT", "AI", "Web3"],
      links: [
        { label: "GitHub", url: "https://github.com/shriyashsoni/ZoraMuse", icon: <Github className="h-4 w-4" /> },
      ],
      color: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
    {
      title: "Coursera Clone",
      description:
        "A powerful, scalable, and visually stunning educational website model inspired by Coursera. This project demonstrates advanced web development skills and the ability to recreate complex educational platforms with modern technologies.",
      image: "/images/coursera.png",
      stats: [
        { icon: <BookOpen className="h-4 w-4" />, value: "Education" },
        { icon: <Code className="h-4 w-4" />, value: "Web Development" },
      ],
      tags: ["Education", "Web Development", "UI/UX"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/shriyashsoni/Coursera-BY-SHRIYASH-SONI",
          icon: <Github className="h-4 w-4" />,
        },
      ],
      color: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      title: "CellMap",
      description:
        "CellMap's logo blends science and tech, featuring a modern cell-inspired design with a clean font—symbolizing innovation, research, and data mapping in the biology-tech space.",
      image: "/images/cellmap.png",
      stats: [
        { icon: <Database className="h-4 w-4" />, value: "Data Mapping" },
        { icon: <Code className="h-4 w-4" />, value: "Biology-Tech" },
      ],
      tags: ["Biology", "Data", "Research"],
      links: [
        { label: "GitHub", url: "https://github.com/shriyashsoni/cellmap", icon: <Github className="h-4 w-4" /> },
      ],
      color: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
    },
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
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                  />
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
