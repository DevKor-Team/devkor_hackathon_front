import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './index';

const configureStore = (initialState, options) => {
    const middlewares = []; // 미들웨어들을 넣으면 된다.
    const enhancer = process.env.NODE_ENV === 'production' ? 
      compose(applyMiddleware(...middlewares)) : 
          composeWithDevTools(
            applyMiddleware(...middlewares)
          );
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
  
}

export default configureStore;