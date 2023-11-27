import ButtonDefault from "./ButtonDefault"

const Card = (props) => {
    return (
        <div className="card bg-blue-100 rounded-lg flex flex-col items-center shadow-sm shadow-blue-600">
            <img
                className="rounded-t-lg h-96 w-full object-cover"
                src={props.image}
                alt={props.title}
            />
            <div className="flex flex-col flex-1 justify-center items-center">
                <h2 className="text-2xl sm:text-2xl xl:text-3xl font-medium text-blue-700 p-2">
                    {props.title}
                </h2>
                <p className="text-lg p-2">{props.description}</p>
            </div>
            <ButtonDefault to={props.to} text={props.buttonText} />
        </div>
    )
}

export default Card
