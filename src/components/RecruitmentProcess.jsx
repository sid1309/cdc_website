export function RecruitmentProcess() {
  const steps = [
    {
      number: "1",
      title: "Placement team contacts companies or companies approach ",
      linkText: "placement coordinators",
      continuedText: " via call/mail at ",
      email: "placement@iittp.ac.in",
      endText: ".",
    },
    {
      number: "2",
      title: "A student placement coordinator (POC) is appointed for further discussions.",
    },
    {
      number: "3",
      title: "Company fills a job application form for each profile they plan to visit.",
    },
    {
      number: "4",
      title:
        "The corresponding profile on the placement portal is updated by the company or their POC using the submitted JAF.",
    },
    {
      number: "5",
      title: "Placement Office verifies the details provided by the company for a particular profile.",
    },
    {
      number: "6",
      title:
        "Dates for Pre-Placement Talk (PPT) and test are finalized by the Placement Office. Involves discussion of POC and the Companies.",
    },
    {
      number: "7",
      title: "Job is made available online to students as per the schedule decided by the Placement Office.",
    },
    {
      number: "8",
      title: "Interested students apply for the recruitment process of a company through the portal.",
    },
  ]

  return (
    <section id="recruitment-process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Procedure</h2>
        </div>

        {/* 2x4 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-6">
              <div className="text-4xl font-bold text-[#6366f1] flex-shrink-0 mt-1">{step.number}</div>
              <div className="text-gray-700 leading-relaxed text-base">
                {step.linkText ? (
                  <>
                    {step.title}
                    <span className="underline cursor-pointer hover:text-[#6366f1]">{step.linkText}</span>
                    {step.continuedText}
                    <a href={`mailto:${step.email}`} className="text-[#6366f1] underline hover:no-underline">
                      {step.email}
                    </a>
                    {step.endText}
                  </>
                ) : (
                  step.title
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
