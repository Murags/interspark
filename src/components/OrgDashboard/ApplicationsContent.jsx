import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const ApplicationsContent = () => {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [applicationsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [roleFilter, setRoleFilter] = useState('All');
  const [selectedApplication, setSelectedApplication] = useState(null);

  // Dummy data - replace with actual API call
  useEffect(() => {
    const dummyData = [
      { id: 1, name: 'John Doe', position: 'Frontend Developer', date: '2023-04-15', status: 'Pending', email: 'john@example.com', resume: 'https://example.com/john-resume.pdf' },
      { id: 2, name: 'Jane Smith', position: 'UX Designer', date: '2023-04-14', status: 'Interviewed', email: 'jane@example.com', resume: 'https://example.com/jane-resume.pdf' },
      { id: 3, name: 'Mike Johnson', position: 'Data Analyst', date: '2023-04-13', status: 'Accepted', email: 'mike@example.com', resume: 'https://example.com/mike-resume.pdf' },
      { id: 4, name: 'Emily Brown', position: 'Marketing Intern', date: '2023-04-12', status: 'Rejected', email: 'emily@example.com', resume: 'https://example.com/emily-resume.pdf' },
      { id: 5, name: 'Alex Lee', position: 'Backend Developer', date: '2023-04-11', status: 'Pending', email: 'alex@example.com', resume: 'https://example.com/alex-resume.pdf' },
      { id: 6, name: 'Sarah Wilson', position: 'Product Manager', date: '2023-04-10', status: 'Interviewed', email: 'sarah@example.com', resume: 'https://example.com/sarah-resume.pdf' },
      { id: 7, name: 'Tom Harris', position: 'Frontend Developer', date: '2023-04-09', status: 'Accepted', email: 'tom@example.com', resume: 'https://example.com/tom-resume.pdf' },
      { id: 8, name: 'Lucy Chen', position: 'Data Scientist', date: '2023-04-08', status: 'Pending', email: 'lucy@example.com', resume: 'https://example.com/lucy-resume.pdf' },
      { id: 9, name: 'David Kim', position: 'UX Designer', date: '2023-04-07', status: 'Rejected', email: 'david@example.com', resume: 'https://example.com/david-resume.pdf' },
      { id: 10, name: 'Emma Watson', position: 'Marketing Intern', date: '2023-04-06', status: 'Interviewed', email: 'emma@example.com', resume: 'https://example.com/emma-resume.pdf' },
      { id: 11, name: 'Chris Evans', position: 'Backend Developer', date: '2023-04-05', status: 'Accepted', email: 'chris@example.com', resume: 'https://example.com/chris-resume.pdf' },
      { id: 12, name: 'Olivia Parker', position: 'Product Manager', date: '2023-04-04', status: 'Pending', email: 'olivia@example.com', resume: 'https://example.com/olivia-resume.pdf' },
    ];
    setApplications(dummyData);
  }, []);

  // Filtering
  const filteredApplications = applications.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'All' || app.status === statusFilter) &&
    (roleFilter === 'All' || app.position === roleFilter)
  );

  // Pagination
  const indexOfLastApplication = currentPage * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
  const currentApplications = filteredApplications.slice(indexOfFirstApplication, indexOfLastApplication);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get unique roles for the role filter
  const roles = ['All', ...new Set(applications.map(app => app.position))];

  const ApplicationModal = ({ application, onClose, onUpdateStatus }) => {
    const [newStatus, setNewStatus] = useState(application.status);

    const handleStatusUpdate = () => {
      onUpdateStatus(application.id, newStatus);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="my-modal">
        <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{application.name}</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Position: {application.position}<br />
                Date Applied: {application.date}<br />
                Email: {application.email}<br />
                Current Status: {application.status}<br />
                <a href={application.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Resume</a>
              </p>
              <div className="mt-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Update Status</label>
                <select
                  id="status"
                  name="status"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Interviewed">Interviewed</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={handleStatusUpdate}
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleUpdateStatus = (id, newStatus) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Internship Applications</h2>

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search applications..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="relative">
            <select
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500 appearance-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Interviewed">Interviewed</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>
            <FaFilter className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="relative">
            <select
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500 appearance-none"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <FaFilter className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
          <thead>
            <tr className="text-left">
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">Name</th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">Position</th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">Date</th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">Status</th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentApplications.map((application) => (
              <tr key={application.id}>
                <td className="border-dashed border-t border-gray-200 px-6 py-4">{application.name}</td>
                <td className="border-dashed border-t border-gray-200 px-6 py-4">{application.position}</td>
                <td className="border-dashed border-t border-gray-200 px-6 py-4">{application.date}</td>
                <td className="border-dashed border-t border-gray-200 px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${application.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                      application.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                      application.status === 'Interviewed' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'}`}>
                    {application.status}
                  </span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-6 py-4">
                  <button
                    onClick={() => setSelectedApplication(application)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredApplications.length / applicationsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {selectedApplication && (
        <ApplicationModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onUpdateStatus={handleUpdateStatus}
        />
      )}
    </div>
  );
};

export default ApplicationsContent;
