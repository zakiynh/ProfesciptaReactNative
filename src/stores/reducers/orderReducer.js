import { createSlice } from "@reduxjs/toolkit";
import * as orderActions from "../actions/orderActions";
import { createEntityAdapter } from "@reduxjs/toolkit";

const orderEntity = createEntityAdapter({
  selectId: (order) => order.id,
});

const orderSlice = createSlice({
  name: "order",
  initialState: orderEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(orderActions.getOrderList.fulfilled, (state, action) => {
      orderEntity.addMany(state, action.payload);
    });
    builder.addCase(orderActions.getDetailOrder.fulfilled, (state, action) => {
      orderEntity.upsertOne(state, action.payload);
    });
  },
});

export const { selectAll: selectAllOrders } = orderEntity.getSelectors(
  (state) => state.order
);
export default orderSlice.reducer;
