import { leaveTeam, registerTeam } from 'axios/Team';

export const leaveTeamById = async (teamId) => {
  if (teamId) {
    const result = (await leaveTeam(teamId)).data.success;
    if (!result) {
      return new Error('팀 탈퇴 실패! 다시 시도해주세요');
    }
    return result;
  }
  return new Error('teamId is Empty');
};

export const registerTeamById = async (teamId, token) => {
  if (teamId) {
    const result = (await registerTeam(teamId, token)).data.success;
    if (!result) {
      return new Error('팀 가입 실패! 다시 시도해주세요');
    }
    return result;
  }
  return new Error('teamId is Empty');
};
