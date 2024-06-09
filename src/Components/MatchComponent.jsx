// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMatchById,
  getPlayerScoreByMatchId,
  getTeamNameByID,
  getTeamsScoreByMatchId,
  getPlayerNameById,
} from "../service/ServiceRepo";

const MatchComponent = () => {
  const { matchId } = useParams();

  const [matchDetail, setMatchDetail] = useState({});
  const [teamScores, setTeamScores] = useState([]);
  const [teamsName, setTeamsName] = useState({});
  const [teamAScore, setTeamAScore] = useState([]);
  const [teamBScore, setTeamBScore] = useState([]);
  const [playerNames, setPlayerNames] = useState({});

  useEffect(() => {
    // Fetch match details, team scores, and player scores in parallel
    Promise.all([
        getMatchById(matchId),
        getTeamsScoreByMatchId(matchId),
        getPlayerScoreByMatchId(matchId),
    ])
    .then(
        async ([matchResponse, teamScoresResponse, playersScoresResponse]) => {
            const matchData = matchResponse.data;
            const teamScoresData = teamScoresResponse.data;
            const playerScoresData = playersScoresResponse.data;

            setMatchDetail(matchData);
            setTeamScores(teamScoresData);

            // Fetch team names based on team scores
            const teamNamesPromises = teamScoresData.map((teamScore) =>
                getTeamNameByID(teamScore.teamId)
            );
            const teamNamesResponses = await Promise.all(teamNamesPromises);
            const teamNames = {};
            teamNamesResponses.forEach((response, index) => {
                teamNames[teamScoresData[index].teamId] = response.data.teamName;
            });
            setTeamsName(teamNames);

            // Separate player scores into team-wise variables
            const teamAScore = playerScoresData.filter(
                (playerScore) => playerScore.teamId === teamScoresData[0].teamId
            );
            const teamBScore = playerScoresData.filter(
                (playerScore) => playerScore.teamId === teamScoresData[1].teamId
            );
            setTeamAScore(teamAScore);
            setTeamBScore(teamBScore);

            // Fetch player names based on player scores
            const playerIds = playerScoresData.map(
                (playerScore) => playerScore.playerId
            );
            const playerNamesPromises = playerIds.map((playerId) =>
                getPlayerNameById(playerId)
            );
            const playerNamesResponses = await Promise.all(playerNamesPromises);
            const playerNames = {};
            playerNamesResponses.forEach((playerName, index) => {
                playerNames[playerIds[index]] = playerName;
            });
            setPlayerNames(playerNames);
        }
    )
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}, [matchId]);


  return (
    <div>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {teamsName[teamScores[0]?.teamId]} Vs{" "}
            {teamsName[teamScores[1]?.teamId]}
          </h1>
          <div className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            <div className="flex justify-center items-center flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                {matchDetail.type}
              </span>
              <span className="pr-2 text-xl font-medium block text-gray-100 bg-fuchsia-500 pl-2 rounded-md pt-1 pb-1">
                Venue: {matchDetail.venue}
              </span>
              <span className="pr-2 text-xl font-medium block text-gray-100 bg-emerald-500 pl-2 rounded-md pt-1 pb-1">
                Status: {matchDetail.status}
              </span>
              <span className="pr-2 text-xl font-medium block text-gray-100 bg-stone-500 pl-2 rounded-md pt-1 pb-1">
                Start Time: {matchDetail.startTime}
              </span>
              <span className="pr-2 text-xl font-medium block text-gray-100 bg-stone-500 pl-2 rounded-md pt-1 pb-1">
                End Time: {matchDetail.endTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-4xl font-extrabold dark:text-white text-center">
        {teamsName[teamScores[0]?.teamId]} ({teamScores[0]?.score}-
        {teamScores[0]?.wicket}/{teamScores[0]?.overs}){" "}
        <p className="text-sky-400 mt-2"> Vs </p>{" "}
        {teamsName[teamScores[1]?.teamId]} ({teamScores[1]?.score}-
        {teamScores[1]?.wicket}/{teamScores[1]?.overs})
      </h2>

      <div className="container mt-5">
        <h4 className="text-2xl font-extrabold dark:text-white">
          {teamsName[teamScores[0]?.teamId]}
        </h4>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3 border-collapse border border-slate-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Player Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Runs
                </th>
                <th scope="col" className="px-6 py-3">
                  Balls
                </th>
                <th scope="col" className="px-6 py-3">
                  4's
                </th>
                <th scope="col" className="px-6 py-3">
                  6's
                </th>
                <th scope="col" className="px-6 py-3">
                  Wickets
                </th>
              </tr>
            </thead>
            <tbody>
              {teamAScore.map((playerScore, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {playerNames[playerScore.playerId]}
                  </th>
                  <td className="px-6 py-4">{playerScore.runs}</td>
                  <td className="px-6 py-4">{playerScore.balls}</td>
                  <td className="px-6 py-4">{playerScore.fours}</td>
                  <td className="px-6 py-4">{playerScore.sixes}</td>
                  <td className="px-6 py-4">{playerScore.wickets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mt-5">
        <h4 className="text-2xl font-extrabold dark:text-white">
          {teamsName[teamScores[1]?.teamId]}
        </h4>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3 border-collapse border border-slate-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Player Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Runs
                </th>
                <th scope="col" className="px-6 py-3">
                  Balls
                </th>
                <th scope="col" className="px-6 py-3">
                  4's
                </th>
                <th scope="col" className="px-6 py-3">
                  6's
                </th>
                <th scope="col" className="px-6 py-3">
                  Wickets
                </th>
              </tr>
            </thead>
            <tbody>
              {teamBScore.map((playerScore, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {playerNames[playerScore.playerId]}
                  </th>
                  <td className="px-6 py-4">{playerScore.runs}</td>
                  <td className="px-6 py-4">{playerScore.balls}</td>
                  <td className="px-6 py-4">{playerScore.fours}</td>
                  <td className="px-6 py-4">{playerScore.sixes}</td>
                  <td className="px-6 py-4">{playerScore.wickets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatchComponent;
