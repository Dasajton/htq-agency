import React from 'react';
import { Link } from 'react-router-dom';

const ButtonDefault = ({ to, text }) => {
  return (
    <button className="text-lg my-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-900 transition text-green-50 rounded">
      <Link to={to}>{text}</Link>
    </button>
  );
};

export default ButtonDefault;