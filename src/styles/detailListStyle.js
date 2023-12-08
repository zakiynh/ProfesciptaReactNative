import { StyleSheet } from "react-native";

export const detailStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      backgroundColor: "olive",
    },
    h1: {
      fontSize: 25,
      fontWeight: "700",
      color: "white",
      padding: 10,
    },
    h2: {
      fontSize: 16,
      fontWeight: "500",
      padding: 10,
    },
    content: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: "whitesmoke",
      padding: 0,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      backgroundColor: "olive",
      padding: 10,
      borderRadius: 10,
      height: 35,
    },
  });