import { createStore } from 'redux';

import reducers from './reducers';

// createStore() do redux recebe uma lista de reducers
const store = createStore(reducers);

export default store;