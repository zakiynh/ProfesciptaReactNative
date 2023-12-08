import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getToken } from '../../token';

const BASE_URL = 'https://dev.profescipta.co.id/so-api';

export const getOrderList = createAsyncThunk('order/getOrderList', async (_, { rejectWithValue }) => {
  try {
    const accessToken = await getToken();

    const response = await axios.get(`${BASE_URL}/your-order-endpoint`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getDetailOrder = createAsyncThunk('order/getDetailOrder', async (orderId, { rejectWithValue }) => {
    try {
      const accessToken = await getToken();
  
      const response = await axios.get(`${BASE_URL}/your-detail-order-endpoint/${orderId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  });