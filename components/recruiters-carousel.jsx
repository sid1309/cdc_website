"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function RecruitersCarousel() {
  const companies = [
    { name: "Amazon", logo: "/images/Amazon-Logo.png" },
    { name: "Google", logo: "/images/google.png" },
    { name: "Microsoft", logo: "/images/microsoft.png" },
    { name: "Qualcomm", logo: "/images/qualcomm.png" },
    { name: "Nvidia", logo: "/images/nvidia.png" },
    { name: "ibm", logo: "/images/ibm.png" },
    { name: "Oracle", logo: "/images/oracle-logo.png" },
    { name: "Sprinklr", logo: "/images/sprinkle.png" },
    { name: "Adobe", logo: "/images/adobe.png" },
    { name: "GoldmanSachs", logo: "/images/goldman.png" },
    { name: "Alation", logo: "/images/alation.png" },
    { name: "TexasIstruments", logo: "/images/texas.png" },
    { name: "Siemens", logo: "/images/seimens.png" },
    { name: "Kia", logo: "/images/kia.png" },
    { name: "DeShaw", logo: "/images/deshaw.png" },
    { name: "Mathworks", logo: "/images/mathworks.png" },
    { name: "Samsun", logo: "/images/samsung.png" },
    { name: "BnyMellon", logo: "/images/bny.png" },
    { name: "SquareX", logo: "/images/squarex.png" },
    { name: "Hyundai", logo: "/images/hyundai.png" },
    { name: "Devrev", logo: "/images/devrev.png" },
    { name: "Salesforce", logo: "/images/salesforce.png" },
    { name: "Deloitte", logo: "/images/deloitte.png" },
    { name: "Paytm", logo: "/images/paytm.png"},
    { name: "Jio", logo: "/images/jio.png" },
    { name: "Versa", logo: "/images/versa.png" },
    { name: "Thoughtspot", logo: "/images/thoughtspot.png" },
    { name: "ABB", logo: "/images/abb.png" },
    { name: "Accenture",logo:"/images/accenture.png" },
    { name: "Turing", logo:"images/turing.png" },
    { name: "icici", logo: "/images/icici.png" },

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