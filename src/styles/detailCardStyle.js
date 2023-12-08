import { StyleSheet } from "react-native";

export const detailCardStyles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 10,
      shadowColor: "grey",
    },
    h2: {
      fontSize: 16,
      fontWeight: "500",
    },
    h3left: {
      fontSize: 10,
      fontWeight: "500",
    },
    h3: {
      fontSize: 10,
      fontWeight: "500",
      textAlign: "center",
    },
    button: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      marginTop: 15,
    },
  });