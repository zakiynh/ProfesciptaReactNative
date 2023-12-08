import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';
import * as orderActions from './actions/orderActions';

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
  },
});

export { orderActions };
export default store;