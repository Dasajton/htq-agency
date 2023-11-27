const TestimonialCard = ({ name, role, comment }) => {
    return (
        <div className="testimonial-card bg-blue-600 p-6 m-2 rounded-lg shadow-md flex flex-col justify-between">
            <p className="text-white text-lg mb-4">{comment}</p>
            <div className="flex items-center">
                <p className="text-blue-50 text-lg font-semibold">{name}</p>
                <p className="text-blue-200 ml-2">{role}</p>
            </div>
        </div>
    )
}

export default TestimonialCard
