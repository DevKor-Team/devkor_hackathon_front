import { getUserInfo, getUserTeam, Logout } from 'axios/User';

// Initial State
const initialState = {
  user: null,
  team: null,
};

export const SET_USER = 'SET_USER';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_TEAM = 'SET_TEAM';
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
      await dispatch(setTeam(res.data));
    })
    .catch((err) => console.dir(err));
};

export const getTeamById = async (dispatch, id) => {
  getUserTeam(id)
    .then(async (res) => {
      await dispatch(setTeam([res.data]));
    })
    .catch((err) => console.dir(err));
};

export const userLogout = async () => {
  Logout()
    .then(() => {
      window.location.reload();
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

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return applySetUser(state, action);
    case SET_USER_PROFILE:
      return applySetUserProfile(state, action);
    case SET_TEAM:
      return applySetTeam(state, action);
    default:
      return state;
  }
};

export default reducer;
