// pages/index.js
import { useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import FilterModal from '../components/FilterModal';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main className="p-4">
                <Table />
            </main>

            <FilterModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
}
