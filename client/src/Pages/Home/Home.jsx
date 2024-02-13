import React, { useState } from 'react';
import { useCaseContext } from '../Context/CaseContext';
import CreateNewCaseModal from './CreateNewCaseModal';
import { Link } from 'react-router-dom';

const Home = () => {
  const { cases, deleteCase, createCase } = useCaseContext();
  const [showModal, setShowModal] = useState(false);
  const [newCaseData, setNewCaseData] = useState({ name: '', description: '' });

  const handleCreateCase = () => {
    createCase(newCaseData.name, newCaseData.description);
    setShowModal(false);
    // Reset form fields after creating a case
    setNewCaseData({ name: '', description: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Add new Case
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cases.map((caseItem) => (
          <div key={caseItem._id} className="bg-white rounded-lg shadow-md p-4">
            <Link to={`/casedetails/${caseItem._id}`}  className="text-xl font-semibold mb-2"  >{caseItem.name}</Link>
            <p className="text-gray-600 mb-4">{caseItem.description}</p>
            <button onClick={() => deleteCase(caseItem._id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
              Delete
            </button>
          </div>
        ))}
      </div>
      {showModal && (<CreateNewCaseModal newCaseData={newCaseData} setNewCaseData={setNewCaseData} handleCreateCase={handleCreateCase} setShowModal={setShowModal}  />)}
    </div>
  );
};

export default Home;
