// components/Table.js
import { mockData } from '../data/mockData';

export default function Table({ columns }) {
    return (
        <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Waitlist</h2>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Filter</button>
          </div>
          <div className="overflow-x-auto mt-4">
              <table className="min-w-full bg-white">
                  <thead>
                      <tr>
                          {columns.map((col) => (
                              <th key={col} className="py-2 px-4 border-b">{col}</th>
                          ))}
                      </tr>
                  </thead>
                  <tbody>
                      {mockData.map((row, index) => (
                          <tr key={index}>
                              {columns.map((col) => (
                                  <td key={col} className="py-2 px-4 border-b">{row[col.toLowerCase().replace(' ', '')]}</td>
                              ))}
                          </tr>
            ))}
                  </tbody>
              </table>
          </div>
      </div>
  );
}
