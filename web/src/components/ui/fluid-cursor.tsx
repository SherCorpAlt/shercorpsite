"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export function FluidCursor() {
    const [isPointer, setIsPointer] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)

            const target = e.target as HTMLElement
            setIsPointer(window.getComputedStyle(target).cursor === "pointer")
        }

        window.addEventListener("mousemove", moveCursor)
        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [cursorX, cursorY])

    return (
        <>
            <motion.div
                className={cn(
                    "fixed left-0 top-0 w-8 h-8 rounded-full border-2 border-neon-green/50 pointer-events-none z-[9999] mix-blend-difference hidden md:block",
                    isPointer ? "scale-150 bg-neon-green/20" : "scale-100"
                )}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
            <motion.div
                className="fixed left-0 top-0 w-2 h-2 rounded-full bg-neon-green pointer-events-none z-[9999] hidden md:block"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    marginLeft: 14, // Center inside the bigger circle
                    marginTop: 14
                }}
            />
        </>
    )
}
