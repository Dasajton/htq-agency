import HomeHero from "../components/HomeHero";

const Home = () => {
    return (
      <>
      <HomeHero />
        <div className="container mt-10 mx-auto px-2">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Willkommen bei der HT<span className="text-green-500">Q</span> Unternehmensberatung</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    </>
    )
}

export default Home;