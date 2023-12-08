import React, { useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from '../stores/index';
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import CardOrder from "../components/CardOrder";
import { orderListStyles } from "../styles/orderListStyle";
import { selectAllOrders } from "../stores/reducers/orderReducer";

export default function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);

  const handleSearch = (searchParams) => {
    dispatch(orderActions.getOrderList(searchParams));
  };

  useEffect(() => {
    dispatch(orderActions.getOrderList());
  }, []);

  const navigation = useNavigation();
  const handleAdd = () => {
    navigation.navigate("Order Detail");
  };

  const totalItem = orders.length;

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={orderListStyles.container}>
          <NavBar />
          <Text style={orderListStyles.h1}>Sales Order List</Text>
          <View style={orderListStyles.content}>
            <Search onSearch={handleSearch}/>
            <View style={orderListStyles.header}>
              <Text style={orderListStyles.h2}>Order List</Text>
              <Text style={orderListStyles.h3}>Total Item: {totalItem}</Text>
            </View>
            <View style={[{ margin: 10 }]}>
              <TouchableOpacity style={orderListStyles.button} onPress={handleAdd}>
                <Text style={orderListStyles.text}>Add</Text>
              </TouchableOpacity>
            </View>
              <CardOrder />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
