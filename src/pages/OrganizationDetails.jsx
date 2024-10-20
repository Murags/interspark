import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGlobe, FaUsers, FaBriefcase, FaChevronLeft, FaCalendarAlt, FaQuoteLeft } from 'react-icons/fa';

const OrganizationDetails = () => {
  const { id } = useParams();

  // Mock data for the organization details
  const organization = {
    id: id,
    name: "Safaricom",
    logo: "/images/safaricom-logo.png",
    description: "Safaricom is a leading mobile network operator in Kenya. We're committed to transforming lives through technology and innovation.",
    location: "Nairobi, Kenya",
    website: "https://www.safaricom.co.ke",
    employeeCount: "5000+",
    industry: "Telecommunications",
    foundedYear: 2000,
    mission: "To transform lives through innovative digital solutions",
    values: [
      "Customer First",
      "Innovation",
      "Collaboration",
      "Integrity",
      "Passion"
    ],
    currentOpenings: 15,
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/safaricom/",
      twitter: "https://twitter.com/Safaricom_Care",
      facebook: "https://www.facebook.com/SafaricomPLC"
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/find-internships" className="flex items-center text-white hover:text-blue-200 transition-colors">
            <FaChevronLeft className="mr-2" />
            <span className="font-medium">Back to Internships</span>
          </Link>
          <h1 className="text-3xl font-bold text-white shadow-text">{organization.name}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow overflow-hidden sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-24 w-24 rounded-full object-cover mr-6 border-4 border-blue-500" src={organization.logo} alt={organization.name} />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{organization.name}</h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{organization.industry}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-blue-600">Current Openings</p>
              <p className="text-2xl font-bold text-gray-900">{organization.currentOpenings}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-sm text-gray-500">{organization.description}</p>
              </div>
              <div className="sm:col-span-1">
                <InfoItem icon={<FaMapMarkerAlt className="text-blue-500" />} label="Location" value={organization.location} />
              </div>
              <div className="sm:col-span-1">
                <InfoItem
                  icon={<FaGlobe className="text-blue-500" />}
                  label="Website"
                  value={
                    <a href={organization.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      {organization.website}
                    </a>
                  }
                />
              </div>
              <div className="sm:col-span-1">
                <InfoItem icon={<FaUsers className="text-blue-500" />} label="Employees" value={organization.employeeCount} />
              </div>
              <div className="sm:col-span-1">
                <InfoItem icon={<FaCalendarAlt className="text-blue-500" />} label="Founded" value={organization.foundedYear} />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Our Mission</h3>
            <div className="bg-blue-50 rounded-lg p-4">
              <FaQuoteLeft className="text-blue-500 mb-2" />
              <p className="text-sm text-gray-700 italic">{organization.mission}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Our Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {organization.values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              {Object.entries(organization.socialLinks).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <span className="sr-only">{platform}</span>
                  <i className={`fab fa-${platform} fa-2x`}></i>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center">
    {icon}
    <div className="ml-2">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  </div>
);

export default OrganizationDetails;
