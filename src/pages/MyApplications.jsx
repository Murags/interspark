import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaRegFile, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';

const MyApplications = () => {
  // Mock data for applications
  const applications = [
    { id: 1, title: 'Software Engineer Intern', company: 'Safaricom', logo: '/images/safaricom-logo.png', status: 'Under Review', appliedDate: '2023-05-15' },
    { id: 3, title: 'Data Analyst Intern', company: 'Equity Bank', logo: '/images/equity-logo.png', status: 'Rejected', appliedDate: '2023-05-05' },
    { id: 4, title: 'UX Designer Intern', company: 'Twiga Foods', logo: '/images/twiga-logo.jpg', status: 'Interview Scheduled', appliedDate: '2023-05-20' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Accepted':
        return <FaCheckCircle className="text-green-500" />;
      case 'Rejected':
        return <FaTimesCircle className="text-red-500" />;
      case 'Under Review':
      case 'Interview Scheduled':
        return <FaHourglassHalf className="text-yellow-500" />;
      default:
        return <FaRegFile className="text-blue-500" />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">My Applications</h1>
          <Link to="/student-dashboard" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {applications.length > 0 ? (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {applications.map((application, index) => (
                <motion.li
                  key={application.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img className="h-12 w-12 rounded-full" src={application.logo} alt={application.company} />
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{application.title}</h3>
                          <p className="text-sm text-gray-500">{application.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {getStatusIcon(application.status)}
                        <span className="ml-2 text-sm font-medium text-gray-700">{application.status}</span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <FaRegFile className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          Applied on {application.appliedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">You haven't applied to any internships yet.</p>
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

export default MyApplications;

