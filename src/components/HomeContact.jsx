import React, { useState } from "react"

const HomeContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <h2 className="text-3xl sm:text-4xl text-center font-medium text-blue-700 p-8">
                Kontakt aufnehmen
            </h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center max-w-2xl p-8 mx-2 sm:mx-auto mb-24 bg-blue-600 rounded shadow-md shadow-blue-900"
            >
                <p className="text-center text-xl text-blue-50 mb-4">
                    Schreiben Sie uns gerne eine Nachricht
                </p>

                <div className="m-2 flex flex-col gap-1">
                    <label
                        className="text-lg font-medium text-blue-50"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="w-full bg-blue-50 text-blue-900 p-2 rounded"
                        type="text"
                        placeholder="Ihr Name..."
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="m-2 flex flex-col gap-1">
                    <label
                        className="text-lg font-medium text-blue-50"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="w-full bg-blue-50 text-blue-900 p-2 rounded"
                        type="email"
                        placeholder="Ihre E-Mail..."
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="m-2 flex flex-col gap-1">
                    <label
                        className="text-lg font-medium text-blue-50"
                        htmlFor="message"
                    >
                        Ihre Nachricht
                    </label>
                    <textarea
                        className="w-full bg-blue-50 text-blue-900 p-2 rounded"
                        placeholder="Ihre Nachricht..."
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button
                    className="m-4 p-4 rounded shadow-md shadow-blue-900 text-blue-900 hover:text-blue-50 bg-blue-50 hover:bg-blue-900 transition self-center"
                    type="submit"
                >
                    Nachricht senden
                </button>
            </form>
        </>
    )
}

export default HomeContact
