import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ProfileSection from '../components/ProfileSection';

const ProfilePage = () => {
  // Mock user data (in a real app, this would come from a state management solution or API call)
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/student-dashboard" className="flex items-center text-white hover:text-yellow-400 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold">Your Profile</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <ProfileSection user={user} />
      </main>
    </div>
  );
};

export default ProfilePage;

