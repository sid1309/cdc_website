export function RecruitersCarousel() {
  const companies = [
    { name: "Amazon", logo: "/images/amazon-logo.png" },
    { name: "Flipkart", logo: "/images/flipkart-logo.png" },
    { name: "D.E.Shaw & Co", logo: "/images/deshaw-logo.png" },
    { name: "Oracle", logo: "/images/oracle-logo.png" },
    { name: "Citi", logo: "https://via.placeholder.com/120x60/0066CC/FFFFFF?text=Citi" },
    { name: "Deloitte", logo: "https://via.placeholder.com/120x60/86BC25/FFFFFF?text=Deloitte" },
    { name: "Deutsche Bank", logo: "https://via.placeholder.com/120x60/0018A8/FFFFFF?text=Deutsche+Bank" },
    { name: "DirectI", logo: "https://via.placeholder.com/120x60/FF6600/FFFFFF?text=DirectI" },
    { name: "Ford", logo: "https://via.placeholder.com/120x60/003478/FFFFFF?text=Ford" },
    { name: "GE Digital", logo: "https://via.placeholder.com/120x60/005EB8/FFFFFF?text=GE+Digital" },
    { name: "Google", logo: "https://via.placeholder.com/120x60/4285F4/FFFFFF?text=Google" },
    { name: "Goldman Sachs", logo: "https://via.placeholder.com/120x60/1F4E79/FFFFFF?text=Goldman+Sachs" },
    { name: "Honda", logo: "https://via.placeholder.com/120x60/CC0000/FFFFFF?text=Honda" },
    { name: "Microsoft", logo: "https://via.placeholder.com/120x60/00BCF2/FFFFFF?text=Microsoft" },
    { name: "Apple", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=Apple" },
    { name: "Meta", logo: "https://via.placeholder.com/120x60/1877F2/FFFFFF?text=Meta" },
    { name: "Netflix", logo: "https://via.placeholder.com/120x60/E50914/FFFFFF?text=Netflix" },
  ]

  const triplicatedCompanies = [...companies, ...companies, ...companies]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Recruiters</h2>
        <div className="relative">
          <div className="flex carousel-animation">
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
    </section>
  )
}
