
import { createStore } from 'redux';

export default (initialState = {}) => {
  const store = createStore(() => {}, initialState)

  return store;
}
