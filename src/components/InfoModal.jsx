"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"

export function InfoModal({ isOpen, onClose, title, content }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 modal-backdrop transition-opacity duration-300" onClick={onClose} />

      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-8 max-h-[80vh] overflow-y-auto transform transition-all duration-300 scale-100">
        <div className="flex items-center justify-between p-8 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-100">
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-8">
          <div className="prose max-w-none">{content}</div>
        </div>

        <div className="flex justify-end p-8 border-t bg-gray-50">
          <Button onClick={onClose} className="bg-[#6366f1] hover:bg-[#5855eb] text-white">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
