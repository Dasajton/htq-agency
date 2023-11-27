import { Link } from 'react-router-dom';

const DropDownLink = ({to, toggleMenu, children}) => {
    return <Link onClick={toggleMenu} to={to} className="py-5 w-3/4 bg-blue-800 hover:bg-blue-900 rounded shadow-md text-blue-50 text-xl text-center">{children}</Link>
}

export default DropDownLink;