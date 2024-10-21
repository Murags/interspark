import React, { useState } from 'react';
import { FaUserGraduate, FaUserTie, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const OverviewContent = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [applications, setApplications] = useState([
    { id: 1, name: 'John Doe', position: 'Frontend Developer', date: '2023-04-15', status: 'Pending', email: 'john@example.com', resume: 'https://example.com/john-resume.pdf' },
    { id: 2, name: 'Jane Smith', position: 'UX Designer', date: '2023-04-14', status: 'Interviewed', email: 'jane@example.com', resume: 'https://example.com/jane-resume.pdf' },
    { id: 3, name: 'Mike Johnson', position: 'Data Analyst', date: '2023-04-13', status: 'Accepted', email: 'mike@example.com', resume: 'https://example.com/mike-resume.pdf' },
    { id: 4, name: 'Emily Brown', position: 'Marketing Intern', date: '2023-04-12', status: 'Rejected', email: 'emily@example.com', resume: 'https://example.com/emily-resume.pdf' },
  ]);

  const StatCard = ({ title, value, change, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {change} from last month
          </p>
        </div>
        <div className="text-4xl text-blue-500">{icon}</div>
      </div>
    </div>
  );

  const RecentApplications = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Applications</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{app.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{app.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{app.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${app.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                        app.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                        app.status === 'Interviewed' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setSelectedApplication(app)}
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
      </div>
    );
  };

  const TopPerformers = () => {
    const performers = [
      { id: 1, name: 'Alice Johnson', position: 'Software Engineer Intern', rating: 4.9 },
      { id: 2, name: 'Bob Williams', position: 'Data Science Intern', rating: 4.8 },
      { id: 3, name: 'Carol Davis', position: 'Marketing Intern', rating: 4.7 },
    ];

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Top Performing Interns</h3>
        <ul className="space-y-4">
          {performers.map((performer) => (
            <li key={performer.id} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src={`https://i.pravatar.cc/150?u=${performer.id}`} alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{performer.name}</p>
                <p className="text-sm text-gray-500 truncate">{performer.position}</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-yellow-500">
                {performer.rating} ★
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ApplicationTrend = () => {
    const data = [
      { name: 'Jan', applications: 65, accepted: 20 },
      { name: 'Feb', applications: 59, accepted: 18 },
      { name: 'Mar', applications: 80, accepted: 25 },
      { name: 'Apr', applications: 81, accepted: 22 },
      { name: 'May', applications: 56, accepted: 15 },
      { name: 'Jun', applications: 55, accepted: 17 },
    ];

    return (
      <div className="bg-white p-6 rounded-lg shadow-md col-span-3">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Application Trend</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ backgroundColor: '#f3f4f6', border: 'none', borderRadius: '8px' }}
              cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
            />
            <Legend />
            <Bar dataKey="applications" fill="#3b82f6" name="Total Applications" radius={[4, 4, 0, 0]} />
            <Bar dataKey="accepted" fill="#10b981" name="Accepted" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard title="Total Applications" value="156" change="+12%" icon={<FaUserGraduate />} />
      <StatCard title="Active Interns" value="23" change="+5%" icon={<FaUserTie />} />
      <StatCard title="Completed Internships" value="89" change="+8%" icon={<FaCheckCircle />} />
      <RecentApplications />
      <TopPerformers />
      <ApplicationTrend />
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

export default OverviewContent;
