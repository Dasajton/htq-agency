import Card from "../Card";

const HomeService = () => {
    return (
        <>
        <div className="container mx-auto mb-24">
        <h2 className="text-3xl sm:text-4xl text-center font-medium text-blue-700 p-8">Unser Service</h2>
        <p className="text-lg text-center mb-4">
            In der HTQ Unternehmensberatung bieten wir Ihnen eine umfassende Expertise in den folgenden Kernbereichen:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-3/4 mx-auto gap-12 p-8">
        <Card
        image="/images/teamplansuccess.jpg"
        title="Unternehmensführung"
        description="In der heutigen dynamischen Geschäftswelt ist eine effektive Unternehmensführung entscheidend für den nachhaltigen Erfolg. Unsere Beratungsdienstleistungen helfen Ihnen, eine klare Vision zu entwickeln, strategische Ziele zu setzen und eine robuste Führungskultur zu etablieren. Gemeinsam gestalten wir die Zukunft Ihres Unternehmens."
        to="/services"
        buttonText="Mehr erfahren"
        />
        <Card
        image="/images/strategy.jpg"
        title="Strategieentwicklung"
        description="Die Entwicklung einer fundierten Unternehmensstrategie ist der Schlüssel, um sich in einem wettbewerbsintensiven Umfeld zu behaupten. Wir unterstützen Sie bei der Identifizierung von Chancen, der Analyse von Risiken und der Definition klarer strategischer Ziele. Lassen Sie uns gemeinsam eine maßgeschneiderte Strategie für Ihren Erfolg entwickeln."
        to="/services"
        buttonText="Mehr erfahren"
        />
        <Card
        image="/images/entrepreneur.jpg"
        title="Prozessoptimierung"
        description="Effiziente und optimierte Geschäftsprozesse sind entscheidend für eine reibungslose Unternehmensabwicklung. Unsere Experten analysieren Ihre bestehenden Abläufe, identifizieren Engpässe und ineffiziente Prozesse, um diese zu optimieren. Durch Prozessverbesserungen steigern wir die Effizienz und senken die Kosten in Ihrem Unternehmen."
        to="/services"
        buttonText="Mehr erfahren"
        />
        <Card
        image="/images/ainetwork.jpg"
        title="Digitalisierung"
        description="Die digitale Transformation ist ein unausweichlicher Schritt in der heutigen Geschäftswelt. Wir begleiten Sie auf dem Weg zur Digitalisierung, entwickeln maßgeschneiderte Lösungen und integrieren innovative Technologien. Gemeinsam gestalten wir Ihre digitale Zukunft und stärken Ihre Wettbewerbsfähigkeit."
        to="/services"
        buttonText="Mehr erfahren"
        />
        </div>
        </div>
        </>
    )
};

export default HomeService;