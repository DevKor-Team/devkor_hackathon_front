import * as CommentAPI from 'axios/Comment';

// Initial State
const initialState = {
  comments: [],
};

export const SET_COMMENTS = 'SET_COMMENTS';
export const CREATE_COMMENTS = 'CREATE_COMMENTS';
export const PATCH_COMMENTS = 'PATCH_COMMENTS';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';
export const LIKE_COMMENTS = 'LIKE_COMMENTS';
export const DISLIKE_COMMENTS = 'DISLIKE_COMMENTS';

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

export const setPatchedComment = (data, idx) => ({
  type: PATCH_COMMENTS,
  data,
  idx,
});

export const setDeletedComment = (idx) => ({
  type: DELETE_COMMENTS,
  idx,
});

export const setLikeComment = (id) => ({
  type: LIKE_COMMENTS,
  id,
});

export const setDisLikeComment = (id) => ({
  type: DISLIKE_COMMENTS,
  id,
});

// API functions
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

export const patchComments = (dispatch, id, idx, data) => {
  const req = {
    data,
  };

  return CommentAPI.patchComment(req, id)
    .then((res) => dispatch(setPatchedComment(res.data, idx)))
    .catch((err) => {
      throw new Error(err);
    });
};

export const deleteComments = async (dispatch, id, idx) => {
  return CommentAPI.deleteComment(id)
    .then(() => {
      dispatch(setDeletedComment(idx));
    })
    .catch((err) => {
      if (err.response.status === 403) {
        alert('자신의 댓글만 삭제하실 수 있습니다!');
        throw new Error(err);
      } else {
        alert('서버상의 이유로 댓글을 삭제하지 못했습니다.');
        throw new Error(err);
      }
    });
};

export const likeComments = async (id) => {
  return CommentAPI.likeComment(id);
};

export const dislikeComments = async (id) => {
  return CommentAPI.dislikeComment(id);
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

export const applySetPatchComment = (state, action) => {
  const prefix = state.comments.slice(0, action.idx);
  const postfix = state.comments.slice(action.idx + 1);
  const patchedData = action.data;

  return {
    ...state,
    comments: [...prefix, patchedData, ...postfix],
  };
};

export const applyDeleteComment = (state, action) => {
  // idx에 해당하는 원소 지우고 리스트 반환
  state.comments.splice(action.idx, 1);
  return {
    ...state,
    comments: [...state.comments],
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return applySetComments(state, action);
    case CREATE_COMMENTS:
      return applySetCreatedComment(state, action);
    case PATCH_COMMENTS:
      return applySetPatchComment(state, action);
    case DELETE_COMMENTS:
      return applyDeleteComment(state, action);
    default:
      return state;
  }
};

export default reducer;
