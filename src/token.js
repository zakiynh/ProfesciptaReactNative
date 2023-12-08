import * as SecureStore from "expo-secure-store";

export const setToken = (token) => {
  return SecureStore.setItemAsync("access_token", token);
};

export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync("access_token");
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};

export const clearToken = async () => {
  try {
    await SecureStore.deleteItemAsync("access_token");
  } catch (error) {
    console.error("Error clearing token:", error);
  }
};
