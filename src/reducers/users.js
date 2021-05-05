// Initial State

const initialState = {
  user: null,
};

export const SET_USER = 'SET_USER';

// API actions

export const getUser = (/* dispatch, getState */) => {};

// action creators

export const setUser = (data) => ({
  type: SET_USER,
  data,
});

// Reducer Funtions

export const applySetUser = (state, action) => {
  return {
    ...state,
    user: action.data,
  };
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return applySetUser(state, action);
    default:
      return state;
  }
};

export default reducer;
