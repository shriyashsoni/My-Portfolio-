import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ApnaChatWidget } from "@/components/apna-chat-widget"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Shriyash Soni | Entrepreneur | Coder | Counsellor | Musician",
  description: "Portfolio of Shriyash Soni - Founder of Apna Counsellor, Apna Coding, and ThriftFlex",
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
  authors: [{ name: "Shriyash Soni" }],
  creator: "Shriyash Soni",
  publisher: "Shriyash Soni",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ApnaChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
