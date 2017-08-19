/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import rooms from './reducers/rooms';

//-------------------------------------------------------------------------------------
// Reducers: Here is the central meeting point for all reducers
//
// Redux.combineReducers
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const reducers = combineReducers({ rooms });
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
);

export default store;
