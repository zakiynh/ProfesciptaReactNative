import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { detailCardStyles } from "../styles/detailCardStyle";

export default function DetailCard() {
  return (
    <View style={detailCardStyles.container}>
      <View>
        <Text style={detailCardStyles.h2}>Barang 1</Text>
        <Text style={detailCardStyles.h3left}>2000.000</Text>
      </View>
      <View>
        <Text style={detailCardStyles.h3}>QTY</Text>
        <Text style={detailCardStyles.h3}>2</Text>
      </View>
      <View>
        <Text style={detailCardStyles.h3}>Total</Text>
        <Text style={detailCardStyles.h3}>4000.000</Text>
      </View>
      <View style={detailCardStyles.button}>
        <AntDesign name="edit" size={18} color="black" />
        <AntDesign name="delete" size={18} color="black" />
      </View>
    </View>
  );
}