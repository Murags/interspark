import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
  return (
    <Link to={`/company/${company.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        <img src={company.logo} alt={company.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
          <p className="text-gray-600 mb-2">{company.industry}</p>
          <p className="text-sm text-blue-600">{company.interns} active interns</p>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;

