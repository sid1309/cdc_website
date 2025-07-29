"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function RecruitersCarousel() {
  const companies = [
    { name: "Amazon", logo: "/images/amazon-logo.png" },
    { name: "Flipkart", logo: "/images/flipkart-logo.png" },
    { name: "D.E.Shaw & Co", logo: "/images/deshaw-logo.png" },
    { name: "Oracle", logo: "/images/oracle-logo.png" },
    { name: "Citi", logo: "/placeholder.svg?height=60&width=120&text=Citi" },
    { name: "Deloitte", logo: "/placeholder.svg?height=60&width=120&text=Deloitte" },
    { name: "Deutsche Bank", logo: "/placeholder.svg?height=60&width=120&text=Deutsche+Bank" },
    { name: "DirectI", logo: "/placeholder.svg?height=60&width=120&text=DirectI" },
    { name: "Ford", logo: "/placeholder.svg?height=60&width=120&text=Ford" },
    { name: "GE Digital", logo: "/placeholder.svg?height=60&width=120&text=GE+Digital" },
    { name: "Google", logo: "/placeholder.svg?height=60&width=120&text=Google" },
    { name: "Goldman Sachs", logo: "/placeholder.svg?height=60&width=120&text=Goldman+Sachs" },
    { name: "Honda", logo: "/placeholder.svg?height=60&width=120&text=Honda" },
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120&text=Microsoft" },
    { name: "Apple", logo: "/placeholder.svg?height=60&width=120&text=Apple" },
    { name: "Meta", logo: "/placeholder.svg?height=60&width=120&text=Meta" },
    { name: "Netflix", logo: "/placeholder.svg?height=60&width=120&text=Netflix" },
  ]

  // Initialize Embla Carousel with the Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false })]
  )

  // Callback functions for the arrow buttons
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Recruiters</h2>
        
        {/* Carousel container */}
        <div className="relative group">
          {/* The viewport for the carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* The scrollable container */}
            <div className="flex">
              {companies.map((company, index) => (
                // Each slide
                <div 
                  className="relative flex-shrink-0 mx-8 flex items-center justify-center" 
                  key={`${company.name}-${index}`}
                  style={{ flexBasis: "150px" }}
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow-md transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  )
}