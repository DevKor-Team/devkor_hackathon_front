import { getUserInfo, Logout } from 'axios/User';
import { getUserTeam, getTeamInfoById } from 'axios/Team';

// Initial State
const initialState = {
  user: null,
  team: null,
  leader: null,
};

export const SET_USER = 'SET_USER';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_TEAM = 'SET_TEAM';
export const SET_LEADER = 'SET_LEADER';
// action creators

export const setUser = (data) => ({
  type: SET_USER,
  data,
});

export const setUserProfile = (data) => ({
  type: SET_USER_PROFILE,
  data,
});

export const setTeam = (data) => ({
  type: SET_TEAM,
  data,
});

export const setLeader = (data) => ({
  type: SET_LEADER,
  data,
});

// API actions
export const getUser = (dispatch) => {
  getUserInfo()
    .then((res) => {
      dispatch(setUser(res.data));
    })
    .catch((err) => console.dir(err));
};

export const getTeam = async (dispatch) => {
  getUserTeam()
    .then(async (res) => {
      await dispatch(setLeader(res.data));
      await dispatch(setTeam(res.data));
    })
    .catch((err) => console.dir(err));
};

export const getTeamById = async (dispatch, id) => {
  getTeamInfoById(id)
    .then(async (res) => {
      await dispatch(setTeam(res.data));
    })
    .catch((err) => console.dir(err));
};

export const userLogout = async () => {
  Logout()
    .then(() => {
      window.location.href = '/';
    })
    .catch((err) => console.dir(err));
};

// Reducer Funtions
export const applySetUser = (state, action) => {
  return {
    ...state,
    user: action.data,
  };
};

export const applySetUserProfile = (state, action) => {
  return {
    ...state,
    user: {
      ...state.user,
      profile: action.data,
    },
  };
};

export const applySetTeam = (state, action) => {
  return {
    ...state,
    team: action.data,
  };
};

export const applySetLeader = (state, action) => {
  const { id } = state.user;
  if (!id) return state;
  if (!Array.isArray(action.data)) return state;
  const leader = action.data.filter((team) => team.leader.id === id);
  return {
    ...state,
    leader,
  };
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return applySetUser(state, action);
    case SET_USER_PROFILE:
      return applySetUserProfile(state, action);
    case SET_TEAM:
      return applySetTeam(state, action);
    case SET_LEADER:
      return applySetLeader(state, action);
    default:
      return state;
  }
};

export default reducer;
