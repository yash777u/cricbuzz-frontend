import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/matches";
const REST_API_TEAM_SCORE_URL = "http://localhost:8080/api/team-score";

export const getAllMatches = () => {
  return axios.get(REST_API_BASE_URL);
};

// Get team score by matchId and teamId
export const getTeamScoreByMatchIdTeamId = (matchId, teamId) => {
    return axios.get(`${REST_API_BASE_URL}/${matchId}/${teamId}`);
};

export const getAllTeamScore = () => {
    return axios.get(REST_API_TEAM_SCORE_URL);
}

export const getTeamsScoreByMatchId = (matchId) => {
    return axios.get(`${REST_API_TEAM_SCORE_URL}/${matchId}`);
}
