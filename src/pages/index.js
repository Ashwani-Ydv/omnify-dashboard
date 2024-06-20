// pages/index.js
import { useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import FilterModal from '../components/FilterModal';
import Sidebar from '../components/Sidebar';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [columns, setColumns] = useState(['Created On', 'Payer', 'Status', 'Email', 'Payer Phone', 'Services', 'Scheduled']);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-4">
                    <Table columns={columns} />
                </main>
                <FilterModal isOpen={isModalOpen} onClose={toggleModal} />
            </div>
        </div>
    );
}
