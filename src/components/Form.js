import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { formStyles } from "../styles/formDetailStyle";

export default function Form() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={formStyles.container}>
      <Text>Sales Information</Text>
      <TextInput
        style={formStyles.input}
        onChangeText={(e) => setOrderNumber(e)}
        placeholder="Sales Order Number"
      />
      <TextInput
        style={formStyles.input}
        onChangeText={(e) => setOrderDate(e)}
        placeholder="Sales Order Date"
      />
      <TextInput
        style={formStyles.input}
        onChangeText={(e) => setCustomer(e)}
        placeholder="Customer"
      />
      <TextInput
        style={formStyles.inputMultiline}
        onChangeText={(e) => setAddress(e)}
        placeholder="Address"
        multiline
        numberOfLines={4}
      />
    </View>
  );
}