"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Clock,
  Send,
  FileText,
  Gauge,
  Briefcase,
  Music,
  PenToolIcon as Tools,
  SwissFrancIcon as Swiss,
  PenTool,
  FileTextIcon as FileText2,
} from "lucide-react"
import Link from "next/link"

export default function LinkGalaxy() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [viewportHeight, setViewportHeight] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [orientation, setOrientation] = useState("portrait")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Update viewport dimensions and device detection
    const updateViewport = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      setViewportHeight(vh)
      setViewportWidth(vw)
      setOrientation(vh > vw ? "portrait" : "landscape")
      setIsMobile(vw < 768) // Update mobile detection
    }

    updateViewport()
    window.addEventListener("resize", updateViewport)

    // Handle mouse/touch movement with performance optimization
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
      })
    }

    const handleTouchMove = (e: TouchEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        })
      })
    }

    // Add event listeners with cleanup
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("orientationchange", updateViewport)

    // Handle iOS viewport height issues
    const handleVisualViewportResize = () => {
      document.documentElement.style.setProperty("--vh", `${window.visualViewport?.height * 0.01}px`)
    }

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleVisualViewportResize)
      handleVisualViewportResize()
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", updateViewport)
      window.removeEventListener("orientationchange", updateViewport)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleVisualViewportResize)
      }
    }
  }, [])

  const links = [
    {
      id: 1,
      name: "PacePal",
      description: "A pomodoro technique Productivity timer",
      url: "https://focus.racer.news",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#514053",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 2,
      name: "Send",
      description: "Simple & Private Filesharing",
      url: "https://send.sdad.pro",
      icon: <Send className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#965260",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 3,
      name: "PasteBin",
      description: "A minimalistic, private online Pastebin",
      url: "https://paste.sdad.pro",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#514053",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 4,
      name: "LibreSpeed",
      description: "A internet speedtesting service",
      url: "https://speedtest.sdad.pro",
      icon: <Gauge className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#965260",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 5,
      name: "BizForge",
      description: "A suite of powerful tools for your business",
      url: "https://bizzforge.sdad.pro",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#514053",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 6,
      name: "Moodist",
      description: "A ambient sounds library for focus and calm",
      url: "https://peace.sdad.pro",
      icon: <Music className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#965260",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 7,
      name: "IT Tools",
      description: "A collection of handy online tools for developers",
      url: "https://toools.sdad.pro",
      icon: <Tools className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#514053",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 8,
      name: "CyberChef",
      description: "The Cyber Swiss Army knife For You",
      url: "https://swiss.sdad.pro",
      icon: <Swiss className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#965260",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 9,
      name: "ExcaliDraw",
      description: "A online whiteboard Collaboration platform",
      url: "https://excali.sdad.pro",
      icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#514053",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
    {
      id: 10,
      name: "PDF Stirling",
      description: "Powerful Webased PDF Manipulator Tool",
      url: "https://pdf.sdad.pro",
      icon: <FileText2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "#965260",
      hoverColor: "#F0979E",
      activeColor: "#E04D54",
    },
  ]

  const getContainerStyles = () => {
    // Dynamic container width based on screen size and orientation
    const baseStyles = "z-10 w-full flex flex-col justify-center"
    let widthStyles = "max-w-[95vw] px-2" // Mobile default

    if (viewportWidth >= 640) {
      // SM breakpoint
      widthStyles = orientation === "landscape" ? "max-w-[85vw] px-4" : "max-w-[90vw] px-3"
    }
    if (viewportWidth >= 1024) {
      // LG breakpoint
      widthStyles =
        orientation === "landscape" ? "max-w-[75vw] xl:max-w-[60vw] 2xl:max-w-[50vw] px-6" : "max-w-[85vw] px-4"
    }

    return `${baseStyles} ${widthStyles}`
  }

  const getCardStyles = (isActive: boolean) => {
    // Dynamic card sizing based on viewport
    const baseStyles = "relative rounded-lg overflow-hidden backdrop-blur-md bg-opacity-20 border border-[#8C8173]/20"

    let sizeStyles = "p-2 min-h-[3rem]" // Mobile default
    if (viewportHeight >= 700) {
      sizeStyles = "p-2.5 min-h-[3.5rem]"
    }
    if (viewportHeight >= 800) {
      sizeStyles = "p-3 min-h-[4rem]"
    }
    if (viewportWidth >= 1024) {
      sizeStyles += " hover:translate-x-1"
    }

    return `${baseStyles} ${sizeStyles}`
  }

  const getGapSize = () => {
    // Dynamic gap sizing based on viewport
    if (viewportHeight < 600) return "gap-1"
    if (viewportHeight < 700) return "gap-1.5"
    if (viewportHeight < 800) return "gap-2"
    return orientation === "landscape" ? "gap-3" : "gap-2.5"
  }

  const getTextStyles = (type: "title" | "description") => {
    // Dynamic text sizing based on viewport
    if (type === "title") {
      if (viewportHeight < 600) return "text-xs"
      if (viewportHeight < 700) return "text-sm"
      return "text-sm sm:text-base"
    } else {
      if (viewportHeight < 600) return "text-[9px]"
      if (viewportHeight < 700) return "text-[10px]"
      return "text-[10px] sm:text-xs"
    }
  }

  const getIconSize = () => {
    // Dynamic icon sizing based on viewport
    if (viewportHeight < 600) return "w-6 h-6"
    if (viewportHeight < 700) return "w-7 h-7"
    return "w-8 h-8 sm:w-10 sm:h-10"
  }

  return (
    <div
      className="relative w-screen overflow-hidden text-white flex items-center justify-center"
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
        background: "#191F31",
        backgroundImage: `radial-gradient(
          circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(240, 151, 158, 0.4) 0%,
          rgba(25, 31, 49, 0.8) 40%,
          rgba(25, 31, 49, 1) 100%
        )`,
        touchAction: "none",
      }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: isMobile ? 15 : 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#E04D54]"
            initial={{
              x: Math.random() * viewportWidth,
              y: Math.random() * viewportHeight,
              scale: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              x: [Math.random() * viewportWidth, Math.random() * viewportWidth],
              y: [Math.random() * viewportHeight, Math.random() * viewportHeight],
              opacity: [0.1, 0.25, 0.1], // Update: opacity animation
            }}
            transition={{
              duration: Math.random() * 15 + 15, // Update: duration
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              width: `${Math.random() * (isMobile ? 4 : 6) + 1}px`,
              height: `${Math.random() * (isMobile ? 4 : 6) + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#514053]/5 to-transparent pointer-events-none"></div>

      <div className={getContainerStyles()}>
        <motion.div
          className={`flex-1 flex flex-col justify-center ${getGapSize()} overflow-visible`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * (isMobile ? 0.06 : 0.1),
                ease: [0.21, 0.45, 0.32, 0.9],
              }}
              whileHover={{
                scale: isMobile ? 1.01 : 1.015,
                zIndex: 10,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              onHoverStart={() => setActiveCard(link.id)}
              onHoverEnd={() => setActiveCard(null)}
              className="w-full"
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full focus:outline-none focus:ring-2 focus:ring-[#E04D54]/50 rounded-lg"
              >
                <motion.div
                  className={`${getCardStyles(activeCard === link.id)} flex items-center transition-colors duration-200`}
                  style={{
                    backdropFilter: "blur(10px)",
                    backgroundColor: activeCard === link.id ? link.hoverColor : link.color,
                    boxShadow:
                      activeCard === link.id
                        ? "0 0 20px rgba(224, 77, 84, 0.2), inset 0 0 20px rgba(224, 77, 84, 0.1)"
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div
                    className={`flex items-center justify-center ${getIconSize()} rounded-full bg-[#0D040C] backdrop-blur-lg mr-3`}
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: activeCard === link.id ? [1, 1.15, 1] : 1 }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: activeCard === link.id ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "reverse",
                      }}
                    >
                      {link.icon}
                    </motion.div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className={`font-bold truncate text-white ${getTextStyles("title")}`}>{link.name}</h2>
                    <p className={`truncate text-[#F0979E] font-medium ${getTextStyles("description")}`}>
                      {link.description}
                    </p>
                  </div>

                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 pointer-events-none"></div>

                  {/* Card particles */}
                  <AnimatePresence>
                    {activeCard === link.id && !isMobile && (
                      <>
                        {Array.from({ length: 3 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute rounded-full bg-[#E04D54]"
                            initial={{
                              x: "50%",
                              y: "50%",
                              scale: 0,
                              opacity: 0.7,
                            }}
                            animate={{
                              x: `${Math.random() * 100}%`,
                              y: `${Math.random() * 100}%`,
                              scale: Math.random() * 0.4 + 0.1, // Update: scale animation
                              opacity: 0,
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                              duration: 1.2, // Update: duration
                              ease: "easeOut",
                            }}
                            style={{
                              width: "4px",
                              height: "4px",
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

