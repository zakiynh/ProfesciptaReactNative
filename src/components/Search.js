import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "../styles/searchStyle";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [orderDate, setOrderDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (selectedDate) {
      setOrderDate(selectedDate);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setKeyword(e)}
        placeholder="Keyword"
      />
      <TouchableOpacity
        onPress={showDatePickerModal}
        style={{ ...styles.input, flexDirection: "row", alignItems: "center" }}
      >
        <FontAwesome name="calendar" size={20} color="black" />
        <TextInput
          style={{ ...styles.input, marginLeft: 5, borderWidth: 0, borderColor: 'transparent', marginBottom: 9}}
          value={orderDate.toLocaleDateString()}
          placeholder="Order Date"
          editable={false}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={orderDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}
