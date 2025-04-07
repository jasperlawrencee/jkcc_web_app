import React from 'react'

interface ModalLogoutProps {
    onClose: () => void;
    onConfirm: () => void;
}

const ModalLogout: React.FC<ModalLogoutProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            No
          </button>
          {/* Confirm Button */}
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalLogout