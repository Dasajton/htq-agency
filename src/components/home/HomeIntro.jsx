import { Link } from "react-router-dom";


const HomeIntro = () => {
    return (
    <>
    <div className="w-full bg-blue-100 pt-1 pb-6 mb-24">
    <div className="container mt-10 mx-auto px-2">
    <div className="flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-bold">
         Willkommen bei der HT<span className="text-blue-600">Q</span> Unternehmensberatung
        </h1>
        <p className="text-lg">
         Wir sind Ihr zuverlässiger Partner für maßgeschneiderte Lösungen in den Bereichen Unternehmensführung, Strategieentwicklung, Prozessoptimierung und Digitalisierung. Mit unserem erfahrenen Team aus Experten begleiten wir Sie auf dem Weg zu nachhaltigem Erfolg und unterstützen Sie dabei, Ihre Ziele zu erreichen.
        </p>
        <p className="text-xl font-bold">Ihr Erfolg ist unser Ziel.</p>
    </div>
        <button className="text-lg mt-6 py-2 px-4 bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-900 transition text-green-50 rounded">
            <Link to="/about-us">Mehr über uns</Link>
        </button>
    </div>
    </div>
    </>
    )
}

export default HomeIntro;