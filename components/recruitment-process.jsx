import { Card, CardContent } from "@/components/ui/card"

export function RecruitmentProcess() {
  const steps = [
    {
      number: "1",
      title:
        "The Placement Office appoints a point of contact for you and sends invitations to recruiting organizations",
    },
    {
      number: "2",
      title: "Recruiters interested in hiring will create their online account on",
      link: "https://campus.placements.iitb.ac.in/auth/recruiter/login",
    },
    {
      number: "3",
      title:
        "To complete the registration, you will have to make a payment as per the registration amount (Only for Placements)",
    },
    {
      number: "4",
      title:
        "Recruiters can now create jobs/internships containing the details of opportunity as required by the Placement Office",
    },
    {
      number: "5",
      title:
        "The details of the job are verified by the executive officers. (Remuneration details and any other ambiguous information)",
    },
    {
      number: "6",
      title:
        "After successful verification, the job is made available online to the students, as per dates decided by the Placement Office",
    },
    {
      number: "7",
      title:
        "Interested students show their willingness to appear for the recruitment process of a company by applying for its Job",
    },
    {
      number: "8",
      title: "Companies can view resumes of interested students and shortlist students using their online account.",
    },
    {
      number: "9",
      title:
        "Companies can proceed with their tests/screening process after finalizing the schedule in coordination with Placement Office",
    },
    {
      number: "10",
      title: "Companies shortlist the selected students for final interview process",
    },
    {
      number: "11",
      title:
        "Placement Office allots dates to organizations for campus interviews based on various details given by companies",
    },
    {
      number: "12",
      title: "The organization confirms the dates with the Placement Office",
    },
  ]

  return (
    <section id="recruitment-process" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Recruitment process</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Our process has evolved over year to ensure that our recruiters have a seamless hiring experience. Here we
            have simplified the steps for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-gray-300 flex-shrink-0">{step.number}</div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {step.title}
                    {step.link && (
                      <div className="mt-2">
                        <a href={step.link} className="text-[#6366f1] hover:underline break-all">
                          {step.link}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
