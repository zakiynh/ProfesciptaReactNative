import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { orderDetailStyles } from "../styles/orderDetailStyle";
import { useNavigation } from "@react-navigation/native";

export default function OrderDetail() {
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.navigate("Order List");
  };
  return (
    <View style={orderDetailStyles.container}>
      <Text style={orderDetailStyles.h3}> Order Summary</Text>
      <View style={orderDetailStyles.content}>
        <Text style={orderDetailStyles.h3}>Sub total :</Text>
        <Text style={orderDetailStyles.h3}></Text>
      </View>
      <View style={orderDetailStyles.content}>
        <Text style={orderDetailStyles.h3}>Total Product :</Text>
        <Text style={orderDetailStyles.h3}></Text>
      </View>
      <View style={orderDetailStyles.buttonFlex}>
        <TouchableOpacity style={orderDetailStyles.button}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 10,
              fontWeight: "700",
              color: "white",
            }}
          >
            Process Item
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 10,
            height: 35,
            width: 100,
            borderColor: "black",
            borderWidth: 0.3,
          }}
        >
          <TouchableOpacity onPress={handleCancel}>
            <Text
              style={{ textAlign: "center", fontSize: 10, fontWeight: "700" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
}
