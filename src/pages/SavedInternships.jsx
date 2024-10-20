import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import InternshipCard from '../components/InternshipCard';

const SavedInternships = () => {
  // Mock data for saved internships
  const savedInternships = [
    { id: 1, title: 'Software Engineer Intern', company: 'Safaricom', location: 'Nairobi', logo: '/images/safaricom-logo.png', time: '2 days ago', applicants: 15, vacancies: 30 },
    { id: 2, title: 'Marketing Assistant', company: 'KCB Bank', location: 'Mombasa', logo: '/images/kcb-logo.png', time: '1 week ago', applicants: 20, vacancies: 25 },
    { id: 3, title: 'Data Analyst Intern', company: 'Equity Bank', location: 'Kisumu', logo: '/images/equity-logo.png', time: '3 days ago', applicants: 10, vacancies: 20 },
    { id: 4, title: 'UX Designer Intern', company: 'Twiga Foods', location: 'Nairobi', logo: '/images/twiga-logo.jpg', time: '5 days ago', applicants: 25, vacancies: 35 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Saved Internships</h1>
          <Link to="/student-dashboard" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {savedInternships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedInternships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <InternshipCard internship={internship} index={index} />
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  title="Remove from saved"
                >
                  <FaTrash />
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">You haven't saved any internships yet.</p>
            <Link
              to="/find-internships"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Find Internships
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default SavedInternships;
