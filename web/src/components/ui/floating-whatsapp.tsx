"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/923215113643"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 group animate-in fade-in slide-in-from-bottom-4 duration-1000"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 text-white fill-white" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with Khawar
            </span>
        </a>
    )
}
