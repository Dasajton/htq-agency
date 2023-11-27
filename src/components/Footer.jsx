import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-600 text-blue-50 text-sm p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <p>&copy; 2023 HTQ Consulting</p>
                    <div className="flex gap-4">
                        <Link className="hover:text-blue-200" to="/impressum">
                            Impressum
                        </Link>
                        <Link className="hover:text-blue-200" to="/datenschutz">
                            Datenschutz
                        </Link>
                        <Link className="hover:text-blue-200" to="/contact">
                            Kontakt
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
