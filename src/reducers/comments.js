import * as CommentAPI from 'axios/Comment';

// Initial State
const initialState = {
  comments: [],
};

export const SET_COMMENTS = 'SET_COMMENTS';
export const CREATE_COMMENTS = 'CREATE_COMMENTS';

// actions
export const setComments = (data) => ({
  type: SET_COMMENTS,
  data,
});

export const setCreatedComment = (data) => ({
  // 추가된 코멘트 처리하기.
  type: CREATE_COMMENTS,
  data,
});

export const createComments = async (dispatch, getState, data) => {
  const req = {
    data,
  };

  return CommentAPI.createComment(req).then((res) => {
    const newComment = res.data;
    const { user } = getState().users;

    newComment.writer = user;

    dispatch(setCreatedComment(newComment));
  });
};

// Reducer Funtions
export const applySetComments = (state, action) => {
  return {
    ...state,
    comments: action.data,
  };
};

export const applySetCreatedComment = (state, action) => {
  return {
    ...state,
    comments: [action.data, ...state.comments],
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return applySetComments(state, action);
    case CREATE_COMMENTS:
      return applySetCreatedComment(state, action);
    default:
      return state;
  }
};

export default reducer;
