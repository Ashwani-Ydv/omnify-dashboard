// components/Sidebar.js
import { useState } from 'react';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`bg-blue shadow ${isCollapsed ? 'w-16' : 'w-64'} transition-width duration-300 h-screen`}>
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2">
                {isCollapsed ? '>' : '<'}
            </button>
            {!isCollapsed && (
                <nav className="p-4">
                    <ul>
                        <li className="mb-2">Orders</li>
                        <li className="mb-2">Subscriptions</li>
                        <li className="mb-2">Calendar</li>
                        <li className="mb-2">Waitlist</li>
                    </ul>
                </nav>
            )}
        </div>
    );
}
