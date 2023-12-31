import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "grey",
  },
  input: {
    height: 40,
    marginTop: 12,
    padding: 10,
    borderWidth: 0.3,
    borderColor: "grey",
    borderRadius: 10,
  },
  inputMultiline: {
    height: 100,
    marginTop: 12,
    padding: 10,
    borderWidth: 0.3,
    borderColor: "grey",
    borderRadius: 10,
  },
});
