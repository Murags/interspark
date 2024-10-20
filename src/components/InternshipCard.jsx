import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaChevronRight, FaUsers, FaBriefcase } from 'react-icons/fa';

const InternshipCard = ({ internship, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="flex items-center mb-4">
        <img src={internship.logo} alt={internship.company} className="h-12 w-12 mr-4 rounded-full object-cover" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{internship.company}</h3>
          <p className="text-blue-600 font-medium">{internship.title}</p>
        </div>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <FaMapMarkerAlt className="mr-2" />
        <span>{internship.location}</span>
        <FaClock className="ml-4 mr-2" />
        <span>{internship.time}</span>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center">
          <FaUsers className="mr-2 text-blue-500" />
          <span>{internship.applicants} applicants</span>
        </div>
        <div className="flex items-center">
          <FaBriefcase className="mr-2 text-green-500" />
          <span>{internship.vacancies} openings</span>
        </div>
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
        Apply Now <FaChevronRight className="ml-2" />
      </button>
    </motion.div>
  );
};

export default InternshipCard;
