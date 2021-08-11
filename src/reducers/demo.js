const initialState = {
  title: '',
  subtitle: '',
  description: '',
  thumbnail: null,
  team: null,
  tags: [],
  techStacks: [],
  submitPopup: false,
};

// action type
export const SET_DEMO = 'SET_DEMO';
export const CHANGE_TITLE = 'demo/CHANGE_TITLE';
export const CHANGE_SUBTITLE = 'demo/CHANGE_SUBTITLE';
export const CHANGE_DESCRIPTION = 'demo/CHANGE_DESCRIPTION';
export const CHANGE_THUMBNAIL = 'demo/CHANGE_THUMBNAIL';
export const CHANGE_TEAM = 'demo/CHANGE_TEAM';
export const CHANGE_TAGS = 'demo/CHANGE_TAGS';
export const CHANGE_TECH_STACKS = 'demo/CHANGE_TECH_STACKS';
export const CHANGE_SUBMIT_POPUP = 'demo/CHANGE_SUBMIT_POPUP';

// util
const updateKey = (state, key, value) => {
  return {
    ...state,
    [key]: value,
  };
};

const actionCreator = (type) => {
  return (data) => {
    return {
      type,
      data,
    };
  };
};

// API actions

// actions

export const setDemo = actionCreator(SET_DEMO);
export const changeTitle = actionCreator(CHANGE_TITLE);
export const changeSubtitle = actionCreator(CHANGE_SUBTITLE);
export const changeDescription = actionCreator(CHANGE_DESCRIPTION);
export const changeThumbnail = actionCreator(CHANGE_THUMBNAIL);
export const changeTeam = actionCreator(CHANGE_TEAM);
export const changeTags = actionCreator(CHANGE_TAGS);
export const changeTechStacks = actionCreator(CHANGE_TECH_STACKS);
export const changeSubmitPopup = actionCreator(CHANGE_SUBMIT_POPUP);

// Reducer Funtions
export const applySetDemo = (state, action) => {
  return {
    ...state,
    ...action.data,
  };
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEMO:
      return applySetDemo(state, action);
    case CHANGE_TITLE:
      return updateKey(state, 'title', action.data);
    case CHANGE_SUBTITLE:
      return updateKey(state, 'subtitle', action.data);
    case CHANGE_DESCRIPTION:
      return updateKey(state, 'description', action.data);
    case CHANGE_THUMBNAIL:
      return updateKey(state, 'thumbnail', action.data);
    case CHANGE_TEAM:
      return updateKey(state, 'team', action.data);
    case CHANGE_TAGS:
      return updateKey(state, 'tags', action.data);
    case CHANGE_TECH_STACKS:
      return updateKey(state, 'techStacks', action.data);
    case CHANGE_SUBMIT_POPUP:
      return updateKey(state, 'submitPopup', action.data);
    default:
      return state;
  }
};

export default reducer;
