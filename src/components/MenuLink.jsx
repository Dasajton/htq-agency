import { Link } from "react-router-dom"

const MenuLink = ({ to, children }) => {
    return (
        <Link
            to={to}
            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 transition text-blue-50 rounded"
        >
            {children}
        </Link>
    )
}

export default MenuLink
