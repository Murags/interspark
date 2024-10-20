import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaFileAlt } from 'react-icons/fa';

const ProfileSection = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mt-8">
      <div className="flex items-center mb-6">
        <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mr-6" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.university}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <FaEnvelope className="text-blue-600 mr-2" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-blue-600 mr-2" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center">
          <FaGraduationCap className="text-blue-600 mr-2" />
          <span>{user.course}</span>
        </div>
        <div className="flex items-center">
          <FaFileAlt className="text-blue-600 mr-2" />
          <span>{user.resumeUrl ? 'Resume Uploaded' : 'No Resume Uploaded'}</span>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Bio</h2>
        <p className="text-gray-700">{user.bio}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap">
          {user.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileSection;
