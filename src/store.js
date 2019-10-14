import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  user : null
};

const middleware = [thunk];

export const store = createStore(
rootReducer,
initialState,
composeWithDevTools(
  applyMiddleware(...middleware)
  )
);
