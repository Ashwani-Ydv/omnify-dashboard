// components/FilterModal.js
export default function FilterModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg relative">
                <h3 className="text-lg font-semibold mb-4">Filter Options</h3>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600"
                >
                    Close
                </button>
                {/* Filter form goes here */}
            </div>
        </div>
    );
}
