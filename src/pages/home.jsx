import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaNetworkWired, FaChartLine, FaTasks, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InternshipCard from '../components/InternshipCard';

const Home = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const logoStyle =
      "h-8 w-8 md:h-10 md:w-10 absolute bg-white rounded-lg p-1 shadow-md transition-all duration-300 ease-in-out hover:scale-150 hover:z-10 hover:shadow-lg";

    const categories = [
      { icon: <FaCode />, title: "Software Engineering", jobs: 60 },
      { icon: <FaUsers />, title: "Human Resource", jobs: 74 },
      { icon: <FaNetworkWired />, title: "IT & Networking", jobs: 20 },
      { icon: <FaChartLine />, title: "Sales & Marketing", jobs: 35 },
      { icon: <FaTasks />, title: "Project Management", jobs: 46 },
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    };

    const jobs = [
      { id: 1, title: 'Software Engineer Intern', company: 'Safaricom', location: 'Nairobi', logo: '/images/safaricom-logo.png', time: '2 days ago', applicants: 15, vacancies: 30 },
      { id: 2, title: 'Marketing Assistant', company: 'KCB Bank', location: 'Mombasa', logo: '/images/kcb-logo.png', time: '1 week ago', applicants: 20, vacancies: 25 },
      { id: 3, title: 'Data Analyst Intern', company: 'Equity Bank', location: 'Kisumu', logo: '/images/equity-logo.png', time: '3 days ago', applicants: 10, vacancies: 20 },
    ];

    return (
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white min-h-screen font-sans">
        {/* Navbar */}
        <nav
          className={`flex justify-between items-center p-4 md:p-6 fixed w-full z-10 transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div
              className={`text-xl md:text-2xl font-bold ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            >
              Interspark
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${
                isMenuOpen
                  ? "block absolute top-full left-0 right-0 bg-blue-500 p-4"
                  : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/find-internships"
                  className={`hover:text-blue-300 transition ${
                    isScrolled ? "text-gray-600" : "text-white"
                  }`}
                >
                  Find Internships
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  className={`hover:text-blue-300 transition ${
                    isScrolled ? "text-gray-600" : "text-white"
                  }`}
                >
                  Companies
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/resources"
                  className={`hover:text-blue-300 transition ${
                    isScrolled ? "text-gray-600" : "text-white"
                  }`}
                >
                  Resources
                </Link>
              </li> */}
              <li>
                <Link
                  to="/about"
                  className={`hover:text-blue-300 transition ${
                    isScrolled ? "text-gray-600" : "text-white"
                  }`}
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Link
                to="/signup"
                className={`py-2 px-6 rounded-full transition ${
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-blue-100"
                }`}
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-screen py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Ignite Your <span className="text-yellow-400">Career</span> with Interspark
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Bridging the gap between talented low-income students and valuable
              internship opportunities. We're creating a more diverse and
              inclusive workforce, one internship at a time.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Search for internships..."
                className="p-4 rounded-full sm:rounded-r-none w-full sm:w-96 mb-2 sm:mb-0 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
              <button className="bg-yellow-400 text-blue-800 py-4 px-8 rounded-full sm:rounded-l-none hover:bg-yellow-300 transition-all duration-300 font-semibold transform hover:scale-105">
                Search
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <img
                src={`${process.env.PUBLIC_URL}/images/Job-img.png`}
                alt="Team"
                className="rounded-lg w-full h-full object-cover"
              />
              {/* Company Logos with Animation */}
              <div className="absolute inset-0 flex justify-center items-center">
                {[
                  { src: 'equity-logo.png', angle: 0, delay: '0s' },
                  { src: 'facebook.png', angle: 45, delay: '1s' },
                  { src: 'google.png', angle: 90, delay: '2s' },
                  { src: 'safaricom-logo.png', angle: 135, delay: '3s' },
                  { src: 'linkedin.png', angle: 180, delay: '4s' },
                  { src: 'andela-logo.png', angle: 225, delay: '5s' },
                  { src: 'twiga-logo.jpg', angle: 270, delay: '6s' },
                  { src: 'snapchat.png', angle: 315, delay: '7s' },
                ].map((logo, index) => (
                  <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/${logo.src}`}
                    alt="Company Logo"
                    className={`${logoStyle} absolute`}
                    style={{
                      top: '50%',
                      left: '46%',
                      transform: `translate(-50%, -50%) rotate(${logo.angle}deg) translateX(250px) rotate(-${logo.angle}deg)`,
                      animation: `spin 10s linear infinite`,
                      animationDelay: logo.delay,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Empowering Careers, Transforming Lives
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of students and companies benefiting from Interspark
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  10k+
                </h3>
                <p className="text-gray-600">Students Placed</p>
              </div>
              <div className="p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  500+
                </h3>
                <p className="text-gray-600">Partner Companies</p>
              </div>
              <div className="p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  98%
                </h3>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  $5M+
                </h3>
                <p className="text-gray-600">Stipends Awarded</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 mb-12 md:mb-0"
              >
                <div className="relative">
                  <img
                    src="/images/happy-intern.jpg"
                    alt="Happy intern"
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-10 -right-10 w-48 h-48">
                    <img
                      src="/images/intern-with-laptop.jpg"
                      alt="Intern with laptop"
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 md:pl-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Thousands of opportunities.
                  <br />
                  <span className="text-blue-600">Find the one that's right for you.</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Search all the open positions on the web. Get your own
                  personalized internship recommendations. Read reviews on over
                  600+ partner companies.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Personalized internship matching
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Dedicated mentorship and support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Financial assistance for unpaid internships
                  </li>
                </ul>
                <button className="bg-blue-600 text-white py-4 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg">
                  ABOUT US
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="bg-white py-20 md:py-32 shadow-lg">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Popular Categories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Explore internship opportunities across various fields
              </p>
            </motion.div>
            <Slider {...settings}>
              {categories.map((category, index) => (
                <div key={index} className="px-2">
                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-100 shadow-md transition-transform duration-300 hover:scale-105">
                    <div className="text-4xl text-blue-600 mb-3">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{category.title}</h3>
                    <p className="text-blue-600 text-sm">{category.jobs} Internships</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Explore Jobs Section */}
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Explore Jobs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Discover exciting opportunities tailored to your skills and aspirations.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {jobs.map((job, index) => (
                <InternshipCard key={job.id} internship={job} index={index} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/find-internships"
                className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                View All Jobs
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Home;
