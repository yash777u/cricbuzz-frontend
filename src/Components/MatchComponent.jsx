import React from "react";

const MatchComponent = () => {
  const matchDetails = {
    type: "T20",
    venue: "ChinnaSwami Stadium",
    status: "Upcoming",
    startTime: "18:00 IST",
    team1: "India",
    team2: "Australia",
    score1: "500",
    score2: "300",
    wickets1: "5",
    wickets2: "8",
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {matchDetails.team1} Vs {matchDetails.team2}
          </h1>
          <div className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            <div className="flex justify-center items-center flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                {matchDetails.type}
              </span>
              <span className=" pr-2 text-xl font-medium block text-gray-100 bg-fuchsia-500 pl-2 rounded-md pt-1 pb-1">
                Venue: {matchDetails.venue}
              </span>
              <span className="pr-2 text-xl font-medium block text-gray-100 bg-emerald-500 pl-2 rounded-md pt-1 pb-1">
                Status: {matchDetails.status}
              </span>

              <span className="pr-2 text-xl font-medium block text-gray-100 bg-stone-500 pl-2 rounded-md pt-1 pb-1">
                Start Time: {matchDetails.startTime}
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h2 className="text-4xl font-extrabold dark:text-white">
          {matchDetails.team1} ({matchDetails.score1}/{matchDetails.wickets1})
        </h2>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Player Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Runs
                </th>
                <th scope="col" className="px-6 py-3">
                  6's
                </th>
                <th scope="col" className="px-6 py-3">
                  4's
                </th>
                <th scope="col" className="px-6 py-3">
                    Wickets
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4"> 50</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4"> 50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatchComponent;
