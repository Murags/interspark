import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import InternshipCard from '../components/InternshipCard';

const FindInternships = ({ isLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const internships = [
    { id: 1, title: 'Software Engineer Intern', company: 'Safaricom', location: 'Nairobi', logo: '/images/safaricom-logo.png', time: '2 days ago', applicants: 15, vacancies: 30 },
    { id: 2, title: 'Marketing Assistant', company: 'KCB Bank', location: 'Mombasa', logo: '/images/kcb-logo.png', time: '1 week ago', applicants: 20, vacancies: 25 },
    { id: 3, title: 'Data Analyst Intern', company: 'Equity Bank', location: 'Kisumu', logo: '/images/equity-logo.png', time: '3 days ago', applicants: 10, vacancies: 20 },
    { id: 4, title: 'UX Designer Intern', company: 'Twiga Foods', location: 'Nairobi', logo: '/images/twiga-logo.jpg', time: '5 days ago', applicants: 25, vacancies: 35 },
    { id: 5, title: 'Business Analyst', company: 'M-KOPA Solar', location: 'Nairobi', logo: '/images/mkopa-logo.png', time: '1 day ago', applicants: 18, vacancies: 40 },
  ];

  const filteredInternships = internships.filter(internship =>
    internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    internship.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <motion.button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaArrowLeft className="inline-block mr-2" />
              <span className="font-medium">Back</span>
            </motion.button>
            {isLoggedIn && (
              <Link to="/student-dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Go to Dashboard
              </Link>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Find Internships</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-grow relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search internships..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="pl-10 pr-8 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-white"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Kisumu">Kisumu</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInternships.map((internship, index) => (
            <InternshipCard key={internship.id} internship={internship} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default FindInternships;
