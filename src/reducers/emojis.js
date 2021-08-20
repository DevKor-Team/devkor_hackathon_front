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
export const SET_ALL_EMOJIS = 'SET_ALL_EMOJIS';
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

export const setAllEmojis = (data) => ({
  type: SET_ALL_EMOJIS,
  data,
});

// API functions
export const getMyEmojis = async (dispatch, id) => {
  EmojiAPI.getMyEmojis(id).then((res) => {
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

  EmojiAPI.toggleEmoji(myEmojis.id, data).then(() => {
    const add = myEmojis[typToType[type]] ? -1 : 1;
    dispatch(
      setAllEmojis({
        emojis: {
          ...emojis,
          [typToType[type]]: emojis[typToType[type]] + add,
        },
        myEmojis: {
          ...myEmojis,
          [typToType[type]]: !myEmojis[typToType[type]],
        },
      })
    );
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

export const applySetAllEmojis = (state, action) => {
  return {
    ...state,
    ...action.data,
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMOJIS:
      return applySetEmojis(state, action);
    case SET_MY_EMOJIS:
      return applySetMyEmojis(state, action);
    case SET_ALL_EMOJIS:
      return applySetAllEmojis(state, action);
    default:
      return state;
  }
};

export default reducer;
