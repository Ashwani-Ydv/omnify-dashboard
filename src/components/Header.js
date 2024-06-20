// components/Header.js
export default function Header() {
    return (
        <header className="p-4 bg-white shadow flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Front Desk</h1>
            <div className="flex items-center">
                <div className="mr-4">
                    <span>Location Name</span>
                    <div>08:30 AM Tue 20 Jan</div>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Log Out</button>
            </div>
        </header>
    );
}
