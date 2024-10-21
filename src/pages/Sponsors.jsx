import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaHandHoldingHeart, FaUsers, FaGraduationCap, FaArrowLeft } from 'react-icons/fa';

const Sponsors = () => {
  const navigate = useNavigate();
  const sponsors = [
    { name: 'ABC Foundation', logo: '/images/equity-logo.png', tier: 'Platinum' },
    { name: 'XYZ Corporation', logo: '/images/kcb-logo.png', tier: 'Gold' },
    { name: 'Tech Innovators', logo: '/images/safaricom-logo.png', tier: 'Silver' },
    // Add more sponsors as needed
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Generous Sponsors</h1>
            <p className="text-xl mb-8">Empowering the next generation of talent</p>
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

      {/* Sponsors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                  <p className="text-blue-600">{sponsor.tier} Sponsor</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaHandHoldingHeart className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">$500K+ Raised</h3>
              <p className="text-gray-600">Supporting low-income students</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">10000+ Students Placed</h3>
              <p className="text-gray-600">In valuable internships</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">50+ Partner Universities</h3>
              <p className="text-gray-600">Collaborating for success</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
          <p className="text-xl mb-8">Join us in shaping the future of diverse talent</p>
          <Link
            to="/become-sponsor"
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
