"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Facebook, Linkedin, ArrowUp, Twitter, Github } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-white dark:bg-[#0F172A] border-t border-gray-200 dark:border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-gradient">Shriyash Soni</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Entrepreneur | Coder | Counsellor | Musician</p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild className="hover:text-indigo-500 dark:hover:text-indigo-400">
                <Link
                  href="https://www.instagram.com/sonishriyash"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-red-500 dark:hover:text-red-400">
                <Link
                  href="https://youtube.com/channel/SHRIYASHSONI_2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-blue-600 dark:hover:text-blue-500">
                <Link
                  href="https://www.facebook.com/share/1AJJHgBhri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-blue-700 dark:hover:text-blue-600">
                <Link
                  href="https://www.linkedin.com/in/shriyash-soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-gray-800 dark:hover:text-gray-300">
                <Link
                  href="https://github.com/shriyashsoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-blue-400 dark:hover:text-blue-300">
                <Link
                  href="https://x.com/shriyash_soni?t=8Mh_W6fG5hfabPzJNTW3lg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#achievements"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="#music"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="#apna-chat"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  Apna Chat
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-violet-600 dark:text-violet-400">Ventures</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400"
                >
                  Apna Counsellor
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400"
                >
                  Apna Coding
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400"
                >
                  ThriftFlex
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400"
                >
                  Apna Chat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">📞 +91 8989976990</li>
              <li className="text-gray-600 dark:text-gray-400">📧 sonishriyash@gmail.com</li>
              <li className="text-gray-600 dark:text-gray-400">📍 Jabalpur, Madhya Pradesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shriyash Soni. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-indigo-400 dark:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
