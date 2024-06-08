import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/matches";
const REST_API_TEAM_SCORE_URL = "http://localhost:8080/api/team-score";
const REST_API_BASE_TEAM = "http://localhost:8080/api/team";

export const getAllMatches = () => {
  return axios.get(REST_API_BASE_URL);
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
