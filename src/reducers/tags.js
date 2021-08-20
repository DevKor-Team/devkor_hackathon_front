// Initial State
const initialState = {
  tags: [
    {
      name: 'css',
      active: false,
    },
    {
      name: 'django',
      active: false,
    },
    {
      name: 'html',
      active: false,
    },
    {
      name: 'nodejs',
      active: false,
    },
    {
      name: 'reactjs',
      active: false,
    },
    {
      name: 'aws',
      active: false,
    },
  ],
};

export const SET_TAGS = 'SET_TAGS';
export const TOGGLE_TAG = 'TOGGLE_TAGS';

export const setTags = (data) => ({
  type: SET_TAGS,
  data,
});

export const toggleTag = (index) => ({
  type: TOGGLE_TAG,
  data: index,
});

export const applyToggleTags = (state, action) => {
  const prefix = state.tags.slice(0, action.data);
  const postfix = state.tags.slice(action.data + 1);
  const patchedData = {
    ...state.tags[action.data],
    active: !state.tags[action.data].active,
  };

  return {
    ...state,
    tags: [...prefix, patchedData, ...postfix],
  };
};

export const applySetTags = (state, action) => {
  return {
    ...state,
    tags: action.data,
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAGS:
      return applySetTags(state, action);
    case TOGGLE_TAG:
      return applyToggleTags(state, action);
    default:
      return state;
  }
};

export default reducer;
