"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Cpu, MessageSquare, Users, Lightbulb, TrendingUp, Video, Shield } from "lucide-react"

export function SkillsSection() {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C/C++", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "AI & Machine Learning", level: 85 },
    { name: "Cybersecurity", level: 75 },
  ]

  const softSkills = [
    { name: "Public Speaking", icon: <MessageSquare className="h-8 w-8 text-primary" /> },
    { name: "Leadership", icon: <Users className="h-8 w-8 text-primary" /> },
    { name: "Team Management", icon: <Users className="h-8 w-8 text-primary" /> },
    { name: "Business Development", icon: <TrendingUp className="h-8 w-8 text-primary" /> },
    { name: "Content Creation", icon: <Video className="h-8 w-8 text-primary" /> },
    { name: "Growth Mindset", icon: <Lightbulb className="h-8 w-8 text-primary" /> },
  ]

  const skillCategories = [
    {
      title: "Software Development",
      icon: <Code className="h-12 w-12 text-primary" />,
      description: "Full-stack development, web & app development, and open-source contributions",
    },
    {
      title: "AI & Data Science",
      icon: <Cpu className="h-12 w-12 text-accent" />,
      description: "Machine learning, deep learning, ArangoDB, and NVIDIA cuGraph",
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-12 w-12 text-secondary" />,
      description: "Cyber threat intelligence, anomaly detection, and GraphRAG",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A combination of technical expertise and soft skills that drive my success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-800">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {skill.icon}
                    <h4 className="text-lg font-semibold mt-4">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
