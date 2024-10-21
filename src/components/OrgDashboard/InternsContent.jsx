import React, { useState } from 'react';
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa';

const InternsContent = () => {
  const [interns, setInterns] = useState([
    { id: 1, name: 'John Doe', position: 'Frontend Developer', startDate: '2023-01-15', endDate: '2023-07-15', rating: 4.5, review: 'Excellent work ethic and quick learner.' },
    { id: 2, name: 'Jane Smith', position: 'UX Designer', startDate: '2023-02-01', endDate: '2023-08-01', rating: 4.0, review: 'Creative and collaborative team player.' },
    { id: 3, name: 'Mike Johnson', position: 'Data Analyst', startDate: '2023-03-01', endDate: '2023-09-01', rating: 3.5, review: 'Good analytical skills, needs improvement in communication.' },
  ]);

  const [selectedIntern, setSelectedIntern] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleReviewSubmit = (internId, newRating, newReview) => {
    setInterns(interns.map(intern =>
      intern.id === internId ? { ...intern, rating: newRating, review: newReview } : intern
    ));
    setIsReviewModalOpen(false);
  };

  const handleDeleteIntern = (internId) => {
    setInterns(interns.filter(intern => intern.id !== internId));
  };

  const ReviewModal = ({ intern, onClose, onSubmit }) => {
    const [rating, setRating] = useState(intern.rating);
    const [review, setReview] = useState(intern.review);

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl w-96">
          <h3 className="text-xl font-semibold mb-4">Review for {intern.name}</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Review</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              onClick={() => onSubmit(intern.id, rating, review)}
            >
              Submit
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Current Interns</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {interns.map((intern) => (
              <tr key={intern.id}>
                <td className="px-6 py-4 whitespace-nowrap">{intern.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{intern.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 mr-2">{intern.rating}</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-3"
                    onClick={() => {
                      setSelectedIntern(intern);
                      setIsReviewModalOpen(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteIntern(intern.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isReviewModalOpen && selectedIntern && (
        <ReviewModal
          intern={selectedIntern}
          onClose={() => setIsReviewModalOpen(false)}
          onSubmit={handleReviewSubmit}
        />
      )}
    </div>
  );
};

export default InternsContent;
