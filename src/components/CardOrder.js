import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/cardOrderStyle";

export default function CardOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.h3}>PROFES</Text>
      <Text style={styles.h3}>50_001</Text>
      <Text style={styles.h3}>24/2/2011</Text>
    </View>
  );
}