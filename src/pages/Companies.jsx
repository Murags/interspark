import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaBuilding, FaUsers, FaChartLine, FaArrowLeft } from 'react-icons/fa';
import CompanyCard from '../components/CompanyCard';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch companies data (mock data for now)
    const mockCompanies = [
      { id: 1, name: 'Safaricom', logo: '/images/safaricom-logo.png', industry: 'Telecommunications', interns: 50 },
      { id: 2, name: 'KCB Bank', logo: '/images/kcb-logo.png', industry: 'Banking', interns: 30 },
      { id: 3, name: 'Equity Bank', logo: '/images/equity-logo.png', industry: 'Banking', interns: 40 },
      // Add more mock companies as needed
    ];
    setCompanies(mockCompanies);
  }, []);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Companies</h1>
            <p className="text-xl mb-8">Connect with top organizations and kickstart your career</p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="w-full py-3 px-4 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowLeft className="mr-2" />
          <span className="font-medium">Back</span>
        </motion.button>
      </div>

      {/* Featured Companies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CompanyCard company={company} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner with Interspark?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaBuilding className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expand Your Reach</h3>
              <p className="text-gray-600">Connect with a diverse pool of talented interns from top universities.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Streamlined Recruitment</h3>
              <p className="text-gray-600">Simplify your hiring process with our advanced matching algorithm.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaChartLine className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grow Your Brand</h3>
              <p className="text-gray-600">Enhance your company's visibility among emerging talents.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Star Intern?</h2>
          <p className="text-xl mb-8">Join Interspark today and connect with top talent!</p>
          <Link
            to="/company-signup"
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Companies;
