import ButtonDefault from "./ButtonDefault";
import TestimonialCard from "./TestimonialCard";

const HomeCooperation = () => {

    const testimonials = [
        {
          name: 'Max Mustermann',
          role: 'CEO, Beispiel GmbH',
          comment: 'Die Zusammenarbeit mit HTQ war äußerst professionell und zielorientiert. Wir haben wertvolle Einblicke gewonnen und konnten unsere Strategie erfolgreich optimieren.',
        },
        {
            name: 'Anna Schmidt',
            role: 'Geschäftsführerin, Muster AG',
            comment: 'HTQ hat unsere Erwartungen übertroffen. Die Expertise im Bereich Digitalisierung und die maßgeschneiderten Lösungen haben unser Unternehmen nach vorne gebracht. Eine hervorragende Partnerschaft!',
          },
          {
            name: 'Michael Wagner',
            role: 'Leiter Finanzen, Beispiel Holding',
            comment: 'Mit HTQ haben wir einen zuverlässigen Partner gefunden. Die Beratung im Bereich Prozessoptimierung hat zu einer deutlichen Effizienzsteigerung geführt. Wir schätzen die transparente Kommunikation und das engagierte Team.',
          },
          {
            name: 'Laura Müller',
            role: 'Marketingdirektorin, Muster GmbH',
            comment: 'HTQ hat uns geholfen, eine klare Marketingstrategie zu entwickeln. Die kreativen Ansätze und die fundierten Analysen haben unsere Kampagnen deutlich verbessert. Eine starke Empfehlung für alle Marketinganforderungen!',
          },
          {
            name: 'Felix Richter',
            role: 'IT-Leiter, Beispiel Solutions',
            comment: 'Die Zusammenarbeit mit HTQ im Bereich Digitalisierung und IT-Strategie war herausragend. Ihr Fachwissen und ihre Innovationskraft haben unsere Projekte auf das nächste Level gebracht. Wir freuen uns auf weitere Erfolge gemeinsam!',
          },
          {
            name: 'Sophie Klein',
            role: 'Personalleiterin, Muster Services',
            comment: 'HTQ hat uns bei der Entwicklung unserer Personalstrategie unterstützt. Die professionelle Beratung und individuellen Lösungen haben dazu beigetragen, dass wir die besten Talente anziehen und halten können. Eine exzellente Zusammenarbeit!',
          },
      ];


    return (
    <>
        <div className="w-full bg-blue-100 pb-4 mb-24">
            <div className="container mx-auto px-2 flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl text-center font-medium text-blue-700 p-8">Kooperationsmöglichkeiten</h2>
            <p className="text-lg text-center mb-4">
                Sie haben Interesse an einer Kooperation? Dann freuen wir uns auf Ihre Kontaktaufnahme.
                Wir bieten unterschiedliche Möglichkeiten der Zusammenarbeit an. Bei weiteren Fragen stehen wir Ihnen gerne zur Verfügung.
            </p>
            <ButtonDefault to="/cooperation" text="Mehr erfahren" />
            </div>
        

            <div className="container mx-auto bg-blue-100">
            <h2 className="text-3xl sm:text-4xl text-center font-medium text-blue-700 p-8">Was unsere Partner sagen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
            </div>
        </div>
        </div>
    </>
    )
}

export default HomeCooperation;