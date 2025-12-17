export default function Working() {
  const steps = [
    {
      number: "01.",
      title: "Register a Free Consultation",
      description: "Quality support and suggest the most appropriate solutions for your van."
    },
    {
      number: "02.",
      title: "Choose What Works for You.",
      description: "Choose a complete range of secure brands such as deadlocks, hook locks, slam locks, alarms and trackers. We will assist you in selecting the right combination that is suitable for your van and ensures you feel safe at any time, day, or night."
    },
    {
      number: "03.",
      title: "Professional Installation",
      description: "Our mobile installation division goes out to you at home, at work, and on-site. Fitters are fast, well trained and fully certified, so all fittings are completed to the highest standard."
    },
    {
      number: "04.",
      title: "Ongoing Support",
      description: "We have a presence even after installation. Do you require repairs, enhancements, or guidance? VanLock is available to provide lifelong support and maintain peace of mind."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Van protection at VanLock is easy, smooth, and stress-free. Seeking protection of a single van, 
            or a fleet of several ones, our workflow is tailored towards your convenience.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-3xl p-6 md:p-8 hover:shadow-lg" // transition-transform duration-300 hover:scale-105
             
            >
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#2282C6] mb-4 md:mb-6">
                  {step.number}
                </h3>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}