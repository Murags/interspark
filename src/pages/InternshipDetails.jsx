import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaUsers, FaBriefcase, FaCalendarAlt, FaGraduationCap, FaChevronLeft, FaInfoCircle, FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaUniversity, FaFileAlt, FaTimes } from 'react-icons/fa';

const InternshipDetails = () => {
  const { id } = useParams();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    graduationYear: '',
    resume: null,
    coverLetter: ''
  });

  // Mock data for the internship details
  const internship = {
    id: id,
    title: "Software Engineer Intern",
    company: "Safaricom",
    logo: "/images/safaricom-logo.png",
    location: "Nairobi, Kenya",
    type: "Full-time",
    duration: "3 months",
    deadline: "June 30, 2023",
    postedDate: "May 15, 2023",
    applicants: 75,
    vacancies: 5,
    description: "We are seeking a talented and motivated Software Engineer Intern to join our dynamic team at Safaricom. This internship offers an excellent opportunity to gain hands-on experience in developing cutting-edge mobile and web applications.",
    responsibilities: [
      "Assist in the development and maintenance of mobile and web applications",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and contribute to team discussions",
      "Learn and work with new technologies and frameworks"
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science, Software Engineering, or a related field",
      "Strong knowledge of at least one programming language (e.g., Java, Python, JavaScript)",
      "Familiarity with web technologies (HTML, CSS, JavaScript)",
      "Basic understanding of databases and RESTful APIs",
      "Excellent problem-solving and analytical skills",
      "Good communication and teamwork abilities"
    ],
    benefits: [
      "Hands-on experience in a leading tech company",
      "Mentorship from experienced professionals",
      "Opportunity to work on real-world projects",
      "Networking opportunities within the tech industry",
      "Certificate of completion",
      "Possibility of full-time employment upon successful completion"
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({ ...prevData, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsApplyModalOpen(false);
    // Reset form and step
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      university: '',
      graduationYear: '',
      resume: null,
      coverLetter: ''
    });
    setCurrentStep(1);
  };

  const closeModal = () => {
    setIsApplyModalOpen(false);
    setCurrentStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      university: '',
      graduationYear: '',
      resume: null,
      coverLetter: ''
    });
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="university" className="block text-sm font-medium text-gray-700">University</label>
                <input
                  type="text"
                  name="university"
                  id="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">Expected Graduation Year</label>
                <input
                  type="number"
                  name="graduationYear"
                  id="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Application Documents</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume (PDF)</label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  id="coverLetter"
                  rows="4"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                ></textarea>
              </div>
            </div>
          </>
        );
      default:
        return null;
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-right"
          >
            <h1 className="text-3xl font-bold text-white mb-1 shadow-text">
              {internship.title}
            </h1>
            <p className="text-blue-200 text-sm font-medium">
              at {internship.company}
            </p>
          </motion.div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center flex-wrap">
              <div className="flex items-center mb-2 sm:mb-0">
                <Link to={`/organization/${internship.companyId}`}>
                  <img className="h-16 w-16 rounded-full object-cover mr-4" src={internship.logo} alt={internship.company} />
                </Link>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{internship.company}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">{internship.location}</p>
                </div>
              </div>

            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <FaBriefcase className="mr-2 text-blue-500" /> Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{internship.type}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <FaClock className="mr-2 text-blue-500" /> Duration
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{internship.duration}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <FaCalendarAlt className="mr-2 text-red-500" /> Application Deadline
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{internship.deadline}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <FaUsers className="mr-2 text-purple-500" /> Applicants
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{internship.applicants}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <FaGraduationCap className="mr-2 text-yellow-500" /> Vacancies
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{internship.vacancies}</dd>
                </div>
              </dl>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Description</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{internship.description}</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-2">
                {internship.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-sm text-gray-500">{responsibility}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Requirements</h3>
              <ul className="list-disc pl-5 space-y-2">
                {internship.requirements.map((requirement, index) => (
                  <li key={index} className="text-sm text-gray-500">{requirement}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                {internship.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-gray-500">{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Apply Now section at the bottom */}
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Ready to start your journey?</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Apply now and take the first step towards your dream career!
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setIsApplyModalOpen(true)}
                >
                  <FaPaperPlane className="mr-2" />
                  Apply Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Apply Modal */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              >
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <FaTimes className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaPaperPlane className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Apply for {internship.title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please fill out the application form below. We'll review your application and get back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <form onSubmit={handleSubmit}>
                    {renderFormStep()}
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-1 sm:text-sm"
                          onClick={() => setCurrentStep(currentStep - 1)}
                        >
                          Previous
                        </button>
                      )}
                      {currentStep < 3 ? (
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                          onClick={() => setCurrentStep(currentStep + 1)}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
                        >
                          Submit Application
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InternshipDetails;
