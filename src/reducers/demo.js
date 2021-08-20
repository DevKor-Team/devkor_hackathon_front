import { getDemo } from 'axios/Demo';

const initialState = {
  id: null,
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
export const INITIALIZE_DEMO = 'demo/INITIALIZE_DEMO';
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
export const resetDemo = actionCreator(INITIALIZE_DEMO);
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

export const initializeDemo = () => {
  return initialState;
};

export const getDemoById = async (dispatch, id) => {
  getDemo(id)
    .then(async (res) => {
      const { title, thumbnail, team, tags } = res.data;
      const data = {
        id: res.data.id,
        title,
        subtitle: res.data.sub_title,
        description: res.data.desc,
        thumbnail: {
          url: thumbnail,
          name: thumbnail.substring(thumbnail.lastIndexOf('/') + 1),
        },
        team,
        tags,
        techStacks: res.data.tech_stacks,
        submitPopup: false,
      };
      console.log(data);
      await dispatch(setDemo(data));
    })
    .catch((err) => console.dir(err));
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEMO:
      return applySetDemo(state, action);
    case INITIALIZE_DEMO:
      return initializeDemo();
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
