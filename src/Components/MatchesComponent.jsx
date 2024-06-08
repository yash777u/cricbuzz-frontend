// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// Import Link from react-router-dom for navigation
import { Link } from "react-router-dom"; // Added this line
import {
  getAllMatches,
  getAllTeamScore,
  getAllTeamsName,
} from "../service/ServiceRepo";

const MatchesComponent = () => {
  const [allMatches, setAllMatches] = useState([]);
  const [allTeamScore, setAllTeamScore] = useState([]);
  const [teamName, setTeamName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all matches
        const matchesResponse = await getAllMatches();
        const matchesData = matchesResponse.data;

        // Fetch all team scores
        const teamScoresResponse = await getAllTeamScore();
        const teamScoresData = teamScoresResponse.data;

        // Fetch all teams name
        const teamsNameResponce = await getAllTeamsName();
        const teamsName1 = teamsNameResponce.data;

        // Print the fetched data to the console
        console.log("Fetched Matches:", matchesData);
        console.log("Fetched Team Scores:", teamScoresData);
        console.log("Teams Names Data Scuessfullu Fethced ", teamsName1);

        // Set the fetched data in state
        setAllMatches(matchesData);
        setAllTeamScore(teamScoresData);
        setTeamName(teamsName1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getMatchTypeClass = (matchType) => {
    switch (matchType) {
      case "T20":
        return "bg-lime-700 text-amber-50 pl-2 pr-2 rounded-sm";
      case "TEST":
        return "bg-cyan-500 text-amber-50 pl-2 pr-2 rounded-sm";
      case "Oneday":
        return "bg-violet-500 text-amber-50 pl-2 pr-2 rounded-sm";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="container mt-5">
      <div className="flex flex-wrap -mx-2">
        {allMatches.map((match, index) => (
          // Wrapped the card content inside a Link component
          <Link 
            to={`/matches/${match.matchId}`} // Set the path to navigate on click
            key={index}
            className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4 mx-2 overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-between items-center mb-2">
              <span
                className={`text-sm font-medium ${getMatchTypeClass(
                  match.matchType
                )}`}
              >
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
            {allTeamScore
              .filter((teamScore) => teamScore.matchId === match.matchId)
              .map((teamScore, index) => (
                <div key={index} className="font-normal text-emerald-500 bg-slate-100 font-semibold">
                  <p>
                    {/* Display team name if available */}
                    {teamName[teamScore.teamId] && (
                      <span>{teamName[teamScore.teamId].teamName}: </span>
                    )}
                    {teamScore.score}-{teamScore.wicket} ({teamScore.overs})
                  </p>
                </div>
              ))}

            <div className="font-normal text-gray-700 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Start Time:</span>
                <span>{match.startTime}</span>
              </div>
              <div className="flex justify-between">
                <span>End Time:</span>
                <span>{match.endTime}</span>
              </div>
            </div>
            <div className="flex items-center mt-4">
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
          </Link> // Closing the Link component
        ))}
      </div>
    </div>
  );
};

export default MatchesComponent;
