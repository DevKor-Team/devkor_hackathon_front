import * as EmojiAPI from 'axios/Emoji';

// Initial State
const initialState = {
  emojis: {
    like: 0,
    wow: 0,
    fire: 0,
    fun: 0,
    sad: 0,
  },
  myEmojis: {
    like: false,
    wow: false,
    fire: false,
    fun: false,
    sad: false,
  },
};
const typToType = {
  LK: 'like',
  FR: 'fire',
  WW: 'wow',
  FN: 'fun',
  SD: 'sad',
};

export const SET_EMOJIS = 'SET_EMOJIS';
export const SET_MY_EMOJIS = 'SET_MY_EMOJIS';
export const TOGGLE_EMOJI = 'TOGGLE_EMOJI';

// actions
export const setEmojis = (data) => ({
  type: SET_EMOJIS,
  data,
});

export const setMyEmojis = (data) => ({
  type: SET_MY_EMOJIS,
  data,
});

export const toggleEmoji = (data) => ({
  // 추가된 코멘트 처리하기.
  type: TOGGLE_EMOJI,
  data,
});

// API functions
export const getMyEmojis = async (dispatch, id) => {
  return EmojiAPI.getMyEmojis(id).then((res) => {
    const myEmoji = { id };
    res.data.results.forEach((item) => {
      myEmoji[typToType[item.typ]] = true;
    });

    dispatch(setMyEmojis(myEmoji));
  });
};

export const toggleMyEmojis = async (dispatch, getState, type) => {
  const data = {
    typ: type,
  };
  const { emojis, myEmojis } = getState().emojis;

  return EmojiAPI.toggleEmoji(myEmojis.id, data).then(() => {
    emojis[typToType[type]] = emojis[typToType[type]] + myEmojis[typToType[type]] ? -1 : 1;
    myEmojis[typToType[type]] = !myEmojis[typToType[type]];
    dispatch(setMyEmojis(myEmojis));
  });
};

// Reducer Funtions
export const applySetEmojis = (state, action) => {
  return {
    ...state,
    emojis: action.data,
  };
};

export const applySetMyEmojis = (state, action) => {
  return {
    ...state,
    myEmojis: {
      ...state.myEmojis,
      ...action.data,
    },
  };
};

export const applyCreateEmoji = (state, action) => {
  return {
    ...state,
    emojis: {
      ...state.emojis,
      [action.data.type]: state.emojis[action.data.type] + 1,
    },
    myEmojis: {
      ...state.myEmojis,
      [action.data.type]: action.data,
    },
  };
};

export const applyDeleteEmoji = (state, action) => {
  return {
    ...state,
    emojis: {
      ...state.emojis,
      [action.data.type]: state.emojis[action.data.type] - 1,
    },
    myEmojis: {
      ...state.myEmojis,
      [action.data.type]: null,
    },
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMOJIS:
      return applySetEmojis(state, action);
    case SET_MY_EMOJIS:
      return applySetMyEmojis(state, action);
    default:
      return state;
  }
};

export default reducer;
