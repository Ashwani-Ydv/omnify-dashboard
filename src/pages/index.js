import { useState } from 'react';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="p-4 bg-white shadow">
                <h1 className="text-2xl font-semibold">Front Desk</h1>
            </header>

            <main className="p-4">
                <div className="bg-white shadow rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Waitlist</h2>
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Add Filter
                        </button>
                    </div>
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Created On</th>
                                    <th className="py-2 px-4 border-b">Payer</th>
                                    <th className="py-2 px-4 border-b">Status</th>
                                    <th className="py-2 px-4 border-b">Email</th>
                                    <th className="py-2 px-4 border-b">Payer Phone</th>
                                    <th className="py-2 px-4 border-b">Services</th>
                                    <th className="py-2 px-4 border-b">Scheduled</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Sample data */}
                                <tr>
                                    <td className="py-2 px-4 border-b">Sun, 07 Jan 2024</td>
                                    <td className="py-2 px-4 border-b">Theodore T.C. Calvin</td>
                                    <td className="py-2 px-4 border-b">Lead</td>
                                    <td className="py-2 px-4 border-b">theodore@gmail.com</td>
                                    <td className="py-2 px-4 border-b">+91 96655918676</td>
                                    <td className="py-2 px-4 border-b">Private Language Session</td>
                                    <td className="py-2 px-4 border-b">Sun, 07 Jan 2024</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Filter Options</h3>
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-gray-600"
                        >
                            Close
                        </button>
                        {/* Filter form goes here */}
                    </div>
                </div>
            )}
        </div>
    );
}
