// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getAllPlayerScore, getAllPlayersName } from "../service/ServiceRepo";

const PlayerComponent = () => {
  const [playerNames, setPlayerNames] = useState([]);
  const [playersScore, setPlayersScore] = useState([]);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const namesResponse = await getAllPlayersName();
        const scoresResponse = await getAllPlayerScore();

        setPlayerNames(namesResponse.data);
        setPlayersScore(scoresResponse.data);

        console.log('Player Names:', namesResponse.data);
        console.log('Player Scores:', scoresResponse.data);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    // Call the async function
    fetchPlayerData();
  }, []);

  // Calculate total stats for each player
  const calculatePlayerStats = (playerId) => {
    const playerMatches = playersScore.filter(score => score.playerId === playerId);
    const totalStats = playerMatches.reduce((totals, match) => {
      totals.runs += match.runs;
      totals.wickets += match.wickets;
      totals.fours += match.fours;
      totals.sixes += match.sixes;
      totals.balls += match.balls;
      return totals;
    }, { runs: 0, wickets: 0, fours: 0, sixes: 0, balls: 0 });

    return totalStats;
  };

  return (
    <div className="container mt-5">
      <div className="flex flex-wrap justify-center">
        {playerNames.map((player, index) => {
          const stats = calculatePlayerStats(player.playerId);
          return (
            <div
              key={index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 m-2 transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://static.vecteezy.com/system/resources/previews/038/258/524/non_2x/cricket-player-logo-design-illustration-vector.jpg"
                  alt="Cricket logo"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {player.playerName}
                </h5>
                <p className="text-center">
                  Run Scored: {stats.runs} <br /> Wickets: {stats.wickets} <br /> 4's: {stats.fours} <br /> 6's: {stats.sixes}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerComponent;
