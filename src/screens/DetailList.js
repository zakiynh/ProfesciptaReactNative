import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList } from "../stores/actions/orderActions"; 
import { orderSelector, selectAllOrders } from "../stores/reducers/orderReducer";
import DetailCard from "../components/DetailCard";
import Form from "../components/Form";
import OrderDetail from "../components/OrderDetail";
import { detailStyles } from "../styles/detailListStyle";

export default function DetailList() {
  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={detailStyles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Ionicons name="ios-menu" size={24} color="black" />
          </View>
          <Text style={detailStyles.h1}>Sales Order Input</Text>
          <View style={detailStyles.content}>
            <Form />
            <View style={detailStyles.header}>
              <Text style={detailStyles.h2}>Detail Sales</Text>
              <View style={[{ margin: 10 }]}>
                <TouchableOpacity style={detailStyles.button}>
                  <Text style={detailStyles.text}>Add Item</Text>
                </TouchableOpacity>
              </View>
            </View>
            {orders.map((order) => (
              <DetailCard key={order.id} order={order} />
            ))}
            <OrderDetail />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}