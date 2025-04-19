"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, AirplayIcon as Spotify } from "lucide-react"
import Link from "next/link"

export function MusicSection() {
  const songs = [
    {
      title: "Mitti Ton Vibe",
      spotify: "https://open.spotify.com/track/0g2tE8FbGCy6iJUxDg2cvh?si=a1YuvRZYT2Sz2ev2eAsicQ",
    },
    {
      title: "F* College",
      spotify: "https://open.spotify.com/track/3IIeqH71tTuaCZVyYvBphQ?si=gd6ZzfE6RkmzjL7T8De7TQ",
    },
    {
      title: "Echoes of Swag",
      spotify: "https://open.spotify.com/track/30vXLeP0HXLyF0qldwjQ1o?si=7j0-QxcBSmWjOIpqc4bzGA",
    },
    {
      title: "Frostveil Reverie",
      spotify: "https://open.spotify.com/track/54ZEkrJtmXuLbACE5uIlJw?si=ofZjZCNyS3S2GJmRiBmKkw",
    },
    {
      title: "DILRISH",
      spotify: "https://open.spotify.com/track/27ulZUjUJerkdpYNvafhLu?si=hMxbbV05RoyZ3DmlEJfmBA",
    },
  ]

  return (
    <section id="music" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Music</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my musical journey and creative expressions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link
              href="https://open.spotify.com/artist/1ta8ePiJQ0t0zuybrppurf?si=Hbct3Ht2S9e9K3cHmfWjbw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Spotify className="h-5 w-5" />
              Spotify
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link
              href="https://music.apple.com/in/artist/shriyash-soni/1781419052?ls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music className="h-5 w-5" />
              Apple Music
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">My Songs</h3>
              <ul className="space-y-4">
                {songs.map((song, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{song.title}</span>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={song.spotify} target="_blank" rel="noopener noreferrer">
                          <Spotify className="h-4 w-4 mr-2" />
                          Listen on Spotify
                        </Link>
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Shriyash Soni - Music Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
