import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar w-full h-[5rem] px-4 flex justify-between items-center shadow-sm shadow-green-600">
        <Link to="/"><span className="logo text-6xl font-bold text-green-700">HTQ</span></Link>
        <ul className="navbar-list flex gap-6 text-xl">
          <Link to="/about-us" className="py-2 px-4 bg-green-500 hover:bg-green-600 transition text-green-50 rounded">Über Uns</Link>
          <Link to="/services" className="py-2 px-4 bg-green-500 hover:bg-green-600 transition text-green-50 rounded">Unser Service</Link>
          <Link to="/cooperation" className="py-2 px-4 bg-green-500 hover:bg-green-600 transition text-green-50 rounded">Kooperation</Link>
          <Link to="/contact" className="py-2 px-4 bg-green-500 hover:bg-green-600 transition text-green-50 rounded">Kontakt</Link>
        </ul>
      </nav>
    );
}

export default Header;