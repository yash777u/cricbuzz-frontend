import React, { useEffect, useState } from "react";
import { getAllMatches, getAllTeamScore } from "../service/ServiceRepo";

const MatchesComponent = () => {
  const [allMatches, setAllMatches] = useState([]);
  const [allTeamScore, setAllTeamScore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all matches
        const matchesResponse = await getAllMatches();
        const matchesData = matchesResponse.data;

        // Fetch all team scores
        const teamScoresResponse = await getAllTeamScore();
        const teamScoresData = teamScoresResponse.data;

        // Print the fetched data to the console
        console.log("Fetched Matches:", matchesData);
        console.log("Fetched Team Scores:", teamScoresData);

        // Set the fetched data in state
        setAllMatches(matchesData);
        setAllTeamScore(teamScoresData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {allMatches.map((match) => {
        // Filter team scores for the current match
        const teamScoresForMatch = allTeamScore.filter(
          (teamScore) => teamScore.matchId === match.matchId
        );

        return (
          <div
            key={match.matchId}
            className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {match.matchType}
              </span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                {match.matchNumber}
              </span>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {match.venue}
            </h5>
            {/* Display team scores for the match */}
            {teamScoresForMatch.map((teamScore, index) => (
              <div
                key={index}
                className="font-normal t text-slate-950"
              >
                <p>
                  {" "}
                  {teamScore.score}-{teamScore.wicket} ({teamScore.overs})
                </p>
              </div>
            ))}
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Start Time: {match.startTime} <br />
              End Time: {match.endTime}
            </p>
            <div className="flex items-center mt-4">
              <span
                className={`h-3 w-3 rounded-full ${
                  match.status === "Completed" ? "bg-green-500" : "bg-gray-500"
                }`}
              ></span>
              <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                {match.status === "ONGOING" ? (
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                    {match.status}
                  </span>
                ) : (
                  <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                    <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                    {match.status}
                  </span>
                )}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchesComponent;
