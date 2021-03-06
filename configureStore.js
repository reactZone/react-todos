import { applyMiddleware, createStore } from "redux";
import rooterReducer from "./reducers";
import { loadState, saveState } from "./localStore";
import logger from 'redux-logger';
import throttle from "lodash/throttle";

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rooterReducer,
    persistedState,
    applyMiddleware(logger)
  );

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos //just save the data without any UI state
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
