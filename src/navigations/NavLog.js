import React, { useEffect, useState } from "react";
import login from "../screens/login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getToken } from "../token";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderList from "../screens/OrderList";
import DetailList from "../screens/DetailList";

const Tab = createBottomTabNavigator();

function NavLog() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      token == null ? setIsSignedIn(false) : setIsSignedIn(true);
    };
  
    checkToken();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="Order List" component={OrderList} />
      <Stack.Screen name="Order Detail"  component={DetailList}/>
    </Stack.Navigator>
  );
}

export default NavLog;