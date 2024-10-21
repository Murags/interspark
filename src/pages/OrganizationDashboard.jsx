import React, { useState } from 'react';
import { FaUsers, FaClipboardList, FaChartBar, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import OverviewContent from '../components/OrgDashboard/OverviewContent';
import ApplicationsContent from '../components/OrgDashboard/ApplicationsContent';
import AnalyticsContent from '../components/OrgDashboard/AnalyticsContent';
import MessagesContent from '../components/OrgDashboard/MessagesContent';
import SettingsContent from '../components/OrgDashboard/SettingsContent';
import InternsContent from '../components/OrgDashboard/InternsContent.jsx';



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
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Company Name</h2>
          <p className="text-sm text-gray-600">Organization Dashboard</p>
        </div>
        <nav className="mt-4">
          <NavItem icon={<FaChartBar />} title="Overview" id="overview" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem icon={<FaClipboardList />} title="Applications" id="applications" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem icon={<FaUsers />} title="Interns" id="interns" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem icon={<FaChartBar />} title="Analytics" id="analytics" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem icon={<FaEnvelope />} title="Messages" id="messages" activeTab={activeTab} setActiveTab={setActiveTab} />
          <NavItem icon={<FaCog />} title="Settings" id="settings" activeTab={activeTab} setActiveTab={setActiveTab} />
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button className="flex items-center text-red-600 hover:text-red-800">
            <FaSignOutAlt className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, title, id, activeTab, setActiveTab }) => (
  <button
    className={`flex items-center w-full px-4 py-2 text-left ${
      activeTab === id ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
    }`}
    onClick={() => setActiveTab(id)}
  >
    {icon}
    <span className="ml-2">{title}</span>
  </button>
);

export default OrganizationDashboard;
