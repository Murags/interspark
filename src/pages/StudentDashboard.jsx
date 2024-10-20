import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaRegBookmark, FaRegFile, FaRegBell, FaChevronRight, FaUserCircle, FaBriefcase, FaMoneyBillWave, FaSignOutAlt } from 'react-icons/fa';
import ProfileSection from '../components/ProfileSection';

const StudentDashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const recommendedInternships = [
    { id: 1, title: 'Software Engineer Intern', company: 'Safaricom', location: 'Nairobi', logo: '/images/safaricom-logo.png' },
    { id: 2, title: 'Marketing Assistant', company: 'KCB Bank', location: 'Mombasa', logo: '/images/kcb-logo.png' },
    { id: 3, title: 'Data Analyst Intern', company: 'Equity Bank', location: 'Kisumu', logo: '/images/equity-logo.png' },
  ];

  const recentApplications = [
    { id: 1, title: 'UX Designer Intern', company: 'Twiga Foods', status: 'Under Review', logo: '/images/twiga-logo.jpg' },
    { id: 2, title: 'Business Analyst', company: 'M-KOPA Solar', status: 'Interviewed', logo: '/images/mkopa-logo.png' },
  ];

  // Mock data for current internship (if any)
  const currentInternship = {
    title: 'Software Developer Intern',
    company: 'Andela Kenya',
    startDate: '2023-06-01',
    endDate: '2023-08-31',
    logo: '/images/andela-logo.png',
  };

  const user = {
    name: "John Muthomi",
    avatar: "/john-avatar.png",
    university: "University of Nairobi",
    email: "john.muthomi@example.com",
    phone: "+254 712 345 678",
    course: "Computer Science",
    resumeUrl: "/john-resume.pdf",
    bio: "Passionate computer science student with a keen interest in software development and data analysis. Looking for opportunities to apply my skills in a real-world setting.",
    skills: ["Python", "JavaScript", "React", "Data Analysis", "Machine Learning"]
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // For now, just redirect to the home page
    navigate('/');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Karibu, John!</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaRegBell className="text-2xl cursor-pointer hover:text-yellow-400 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <div className="relative" ref={dropdownRef}>
              <FaUserCircle
                className="text-3xl cursor-pointer hover:text-yellow-400 transition-colors"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/student-dashboard/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaSignOutAlt className="inline mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {showProfile ? (
          <ProfileSection user={user} />
        ) : (
          <>
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md mb-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Quick Actions</h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <FaSearch />, text: 'Find Internships', color: 'bg-blue-600', link: '/find-internships' },
                  { icon: <FaRegBookmark />, text: 'Saved Internships', color: 'bg-green-500', link: '/student-dashboard/saved-internships' },
                  { icon: <FaRegFile />, text: 'My Applications', color: 'bg-yellow-500', link: '/student-dashboard/my-applications' },
                ].map((action, index) => (
                  <Link key={index} to={action.link}>
                    <motion.div
                      whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                      whileTap={{ scale: 0.95 }}
                      className={`${action.color} p-4 rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 text-white`}
                    >
                      <span className="text-2xl mb-2">{action.icon}</span>
                      <span className="text-sm font-medium text-center">{action.text}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Current Internship and Sponsorship */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Current Internship</h2>
                {currentInternship ? (
                  <div className="flex items-center space-x-4 mb-6">
                    <img src={currentInternship.logo} alt={currentInternship.company} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-medium text-gray-800">{currentInternship.title}</h3>
                      <p className="text-sm text-gray-600">{currentInternship.company}</p>
                      <p className="text-sm text-gray-600">
                        {currentInternship.startDate} - {currentInternship.endDate}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 mb-6">You don't have an active internship at the moment.</p>
                )}
                <button className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center">
                  <FaMoneyBillWave className="mr-2" />
                  Apply for Sponsorship Package
                </button>
              </motion.div>

              {/* Recommended Internships */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Recommended Internships</h2>
                <ul className="space-y-6">
                  {recommendedInternships.map((internship) => (
                    <li key={internship.id} className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                      <img src={internship.logo} alt={internship.company} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-800">{internship.title}</h3>
                        <p className="text-sm text-gray-600">{internship.company} - {internship.location}</p>
                      </div>
                      <FaBriefcase className="text-blue-600" />
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                  View All Recommendations
                  <FaChevronRight className="ml-2" />
                </button>
              </motion.div>
            </div>

            {/* Recent Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Recent Applications</h2>
              <ul className="space-y-6">
                {recentApplications.map((application) => (
                  <li key={application.id} className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                    <img src={application.logo} alt={application.company} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-800">{application.title}</h3>
                      <p className="text-sm text-gray-600">{application.company}</p>
                      <p className="text-sm font-medium text-blue-600">{application.status}</p>
                    </div>
                    <FaRegFile className="text-blue-600" />
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                View All Applications
                <FaChevronRight className="ml-2" />
              </button>
            </motion.div>
          </>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
