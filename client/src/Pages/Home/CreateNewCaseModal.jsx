import React from 'react'


export default function CreateNewCaseModal({ newCaseData, setNewCaseData, handleCreateCase, setShowModal }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add New Case</h2>
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input type="text" value={newCaseData.name} onChange={(e) => setNewCaseData({ ...newCaseData, name: e.target.value })} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Description:</label>
        <textarea value={newCaseData.description} onChange={(e) => setNewCaseData({ ...newCaseData, description: e.target.value })} className="w-full px-3 py-2 border rounded-md" rows="4"></textarea>
      </div>
      <div className="text-right">
        <button onClick={handleCreateCase} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Create</button>
        <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md ml-2 hover:bg-gray-400 focus:outline-none">Cancel</button>
      </div>
    </div>
  </div>
  )
}
