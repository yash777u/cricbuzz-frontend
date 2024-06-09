import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/matches";
const REST_API_TEAM_SCORE_URL = "http://localhost:8080/api/team-score";
const REST_API_BASE_TEAM = "http://localhost:8080/api/team";
const REST_API_BASE_Player_Score = "http://localhost:8080/api/player-score";
const REST_API_BASE_PLAYER = "http://localhost:8080/api/player";

//Get Player Name by PlayerID
export const getPlayerNameById = (playerId) => {
    return axios.get(`${REST_API_BASE_PLAYER}/${playerId}`).then(response => response.data.playerName);
}


// Get All Matches
export const getAllMatches = () => {
  return axios.get(REST_API_BASE_URL);
};

// Get Match By ID
export const getMatchById = (id) => {
    return axios.get(`http://localhost:8080/api/matches/match/${id}`);
  };

// Get team score by matchId and teamId
export const getTeamScoreByMatchIdTeamId = (matchId, teamId) => {
    return axios.get(`${REST_API_BASE_URL}/${matchId}/${teamId}`);
};

// Get All Teams Score
export const getAllTeamScore = () => {
    return axios.get(REST_API_TEAM_SCORE_URL);
}

// Get Teams Score by Match Id
export const getTeamsScoreByMatchId = (matchId) => {
    return axios.get(`${REST_API_TEAM_SCORE_URL}/${matchId}`);
}

//Get ALl Teams Name
export const getAllTeamsName = () => {
    return axios.get(`${REST_API_BASE_TEAM}`);
}

// Team Name By TeamID
export const getTeamNameByID = async (teamId) => {
    try {
      const response = await axios.get(`${REST_API_BASE_TEAM}/${teamId}`);
      return response; // Return the entire response object
    } catch (error) {
      console.error('Error fetching team name:', error);
      throw error;
    }
};


// Get Player Score By TeamID and mAtch ID 
export const getPlayerScoreByMatchIdTeamId=(matchId, teamId) => {
    return axios.get(`${REST_API_BASE_Player_Score}/${matchId}/${teamId}`);
}

// Get Player Score By Match Id
export const getPlayerScoreByMatchId = (matchId) => {
    return axios.get(`${REST_API_BASE_Player_Score}/match/${matchId}`);
}