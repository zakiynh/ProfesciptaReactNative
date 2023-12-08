import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "grey",
    height: 50,
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
