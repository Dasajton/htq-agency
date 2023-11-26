import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card bg-blue-100 rounded-lg flex flex-col items-center shadow-sm shadow-blue-600">
            <img className="rounded-t-lg h-80 w-full object-fill" src={props.image} alt={props.title} />
            <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-2xl xl:text-3xl font-medium text-blue-700 p-2">{props.title}</h2>
            <p className="text-lg p-2">{props.description}</p>
            </div>
            <button className="p-4 my-6 bg-blue-600 hover:bg-blue-700 transition rounded text-blue-50 shadow-sm shadow-blue-900 focus:outline-none focus:ring focus:border-blue-300">
                <Link to="/services">Mehr Erfahren</Link>
            </button>


        </div>
    )
}

export default Card;