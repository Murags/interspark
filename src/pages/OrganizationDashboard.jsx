import React, { useState } from 'react';
import { FaUsers, FaClipboardList, FaChartBar, FaEnvelope, FaCog, FaSignOutAlt, FaTachometerAlt, FaBriefcase } from 'react-icons/fa';
import OverviewContent from '../components/OrgDashboard/OverviewContent';
import ApplicationsContent from '../components/OrgDashboard/ApplicationsContent';
import AnalyticsContent from '../components/OrgDashboard/AnalyticsContent';
import MessagesContent from '../components/OrgDashboard/MessagesContent';
import SettingsContent from '../components/OrgDashboard/SettingsContent';
import InternsContent from '../components/OrgDashboard/InternsContent';
import JobsContent from '../components/OrgDashboard/JobsContent';

const OrganizationDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewContent />;
      case 'applications':
        return <ApplicationsContent />;
      case 'interns':
        return <InternsContent />;
      case 'jobs':
        return <JobsContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'messages':
        return <MessagesContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex-shrink-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-20 bg-blue-600 text-white">
            <h1 className="text-2xl font-bold">InterSpark</h1>
          </div>
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Company Name</h2>
            <p className="text-sm text-gray-600">Organization Dashboard</p>
          </div>
          <nav className="flex-grow mt-4 px-2">
            <NavItem icon={<FaTachometerAlt />} title="Overview" id="overview" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<FaClipboardList />} title="Applications" id="applications" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<FaUsers />} title="Interns" id="interns" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<FaBriefcase />} title="Jobs" id="jobs" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<FaChartBar />} title="Analytics" id="analytics" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<FaEnvelope />} title="Messages" id="messages" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<FaCog />} title="Settings" id="settings" activeTab={activeTab} setActiveTab={setActiveTab} />
          </nav>
          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
              <FaSignOutAlt className="mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, title, id, activeTab, setActiveTab }) => (
  <button
    className={`flex items-center w-full px-4 py-2 mt-2 text-sm font-medium transition-colors duration-200 rounded-md ${
      activeTab === id
        ? 'bg-blue-100 text-blue-600'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
    onClick={() => setActiveTab(id)}
  >
    <span className={`inline-flex items-center justify-center h-8 w-8 rounded-md ${
      activeTab === id ? 'bg-blue-200 text-blue-600' : 'bg-gray-200 text-gray-600'
    }`}>
      {icon}
    </span>
    <span className="ml-3">{title}</span>
  </button>
);

export default OrganizationDashboard;
