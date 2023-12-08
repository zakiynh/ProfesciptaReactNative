import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { clearToken } from "../token";
import { useNavigation } from "@react-navigation/native";

export default function NavBar() {
  const navigation = useNavigation();
  const handleLogout = () => {
    clearToken();
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 100,
        }}
      />
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}