import createComment from 'axios/Comment';

// Initial State
const initialState = {
  comments: [],
};

export const SET_COMMENTS = 'SET_COMMENTS';
export const CREATE_COMMENTS = 'CREATE_COMMENTS';

export const createComments = async (dispatch, data) => {
  const req = {
    data,
  };
  await createComment(req).then((res) => {
    console.log(res);
  });
};
export const setComments = (data) => ({
  type: SET_COMMENTS,
  data,
});

// Reducer Funtions
export const applySetComments = (state, action) => {
  return {
    ...state,
    comments: action.data,
  };
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return applySetComments(state, action);
    default:
      return state;
  }
};

export default reducer;
