import { StyleSheet } from "react-native";

export const orderDetailStyles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: "white",
      borderRadius: 10,
      shadowColor: "grey",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
    },
    h3: {
      fontSize: 10,
      fontWeight: "700",
    },
    buttonFlex: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      marginTop: 15,
      justifyContent: "center",
    },
    button: {
      backgroundColor: "olive",
      padding: 10,
      borderRadius: 10,
      height: 35,
      width: 100,
    },
  });