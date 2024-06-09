import React, { useEffect, useState } from 'react';
import { getAllTeamsName } from '../service/ServiceRepo';

const AllTeamsComponent = () => {
  const [teamsName, setTeamsName] = useState([]);

  useEffect(() => {
    const fetchTeamsName = async () => {
      try {
        const response = await getAllTeamsName();
        setTeamsName(response.data);
      } catch (error) {
        console.error("Error fetching teams names:", error);
      }
    };

    fetchTeamsName();
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">All Teams</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Team ID
              </th>
              <th scope="col" className="px-6 py-3">
                Team Name
              </th>
            </tr>
          </thead>
          <tbody>
            {teamsName.map((team, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {team.teamId}
                </th>
                <td className="px-6 py-4">
                  {team.teamName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTeamsComponent;
