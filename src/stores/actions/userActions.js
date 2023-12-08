import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from '../../token';
import { LOGIN_USER_SUCCESS } from './actionTypes';

const baseUrl = 'https://dev.profescipta.co.id/so-api/token';

export const login = createAsyncThunk(
  LOGIN_USER_SUCCESS,
  async (
    { username, password, grant_type, client_id, client_secret },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        baseUrl,
        `username=${username}&password=${password}&grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setToken(response.data.access_token);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
