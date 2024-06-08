import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/matches";
const REST_API_TEAM_SCORE_URL = "http://localhost:8080/api/team-score";
const REST_API_BASE_TEAM = "http://localhost:8080/api/team";
const REST_API_BASE_Player_Score = "http://localhost:8080/api/player-score";

// Get All Matches
export const getAllMatches = () => {
  return axios.get(REST_API_BASE_URL);
};

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

//Get Teams Name by Team Id
export const getAllTeamsName = () => {
    return axios.get(`${REST_API_BASE_TEAM}`);
}


export const getPlayerScoreByMatchId = (matchId) => {
    return axios.get(`${REST_API_BASE_Player_Score}/match/${matchId}`);
}