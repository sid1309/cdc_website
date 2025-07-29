"use client"

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

  // Triple the array to ensure seamless infinite scroll
  const triplicatedCompanies = [...companies, ...companies, ...companies]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Recruiters</h2>
        <div className="relative">
          <div className="flex animate-scroll-seamless">
            {triplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: "150px" }}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-16 w-auto object-contain hover:scale-110 transition-all duration-300 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll-seamless {
          animation: scroll-seamless 45s linear infinite;
          width: max-content;
        }
        .animate-scroll-seamless:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
