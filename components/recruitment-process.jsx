import { Card, CardContent } from "@/components/ui/card"

export function RecruitmentProcess() {
  const steps = [
    {
      number: "1",
      title:
        "The Career Development Centre (CDC) at IIT Tirupati warmly invites esteemed recruiters to connect with our talented students by sharing detailed and relevant information.",
    },
    {
      number: "2",
      title: "Recruiters register on the online CDC web portal by creating an account.",
      link: "https://iittp.pod.ai/pages/campus-placements",
    },
    {
      number: "3",
      title:
        "Recruiters fill out the online job notification form, providing detailed information about the job role, eligibility criteria, and other relevant specifications using the CDC portal.",
    },
    {
      number: "4",
      title:
        "If the recruiter is interested in conducting pre-placement talk they can send a request along with the preferred dates.",
    },
    {
      number: "5",
      title:
        "The job notification form is made available online to all the eligible students.",
    },
    {
      number: "6",
      title:
        "Students apply online to companies’ job profiles from the portal.",
    },
    {
      number: "7",
      title:
        "The CDC office informs the recruiters of the dates for the on-campus placement process. Recruiters visit the campus on allotted dates and conduct the selection process.",
    },
    {
      number: "8",
      title:
        "The recruiter is required to submit the list of selected and waitlisted (if desired) students to the CDC office soon after the completion of the selection process.",
    },
  ]

  return (
    <section id="recruitment-process" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Recruitment process</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Our process has evolved over the years to ensure that our recruiters have a seamless hiring experience.
            Here we have simplified the steps for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const isStep7 = index === 6;
            const isStep8 = index === 7;

            const customClass =
              isStep7 ? "lg:col-start-1" : isStep8 ? "lg:col-start-2" : "";

            return (
              <Card
                key={step.number}
                className={`bg-white shadow-sm hover:shadow-md transition-shadow ${customClass}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="text-4xl font-bold flex-shrink-0"
                      style={{ color: "#113F67" }}
                    >
                      {step.number}
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      {step.title}
                      {index === 1 && step.link && (
                        <div className="mt-4">
                          <a
                            href={step.link}
                            className="inline-block px-4 py-2 bg-[#113F67] text-white rounded-md hover:bg-[#D92C54] transition"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Register Here
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
