import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="bg-blue-600 text-blue-50 text-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 HTQ Consulting</p>
        <div className="flex gap-4">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;