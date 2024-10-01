import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon, TrashIcon } from "react-native-heroicons/outline";
import {
  decreasingQuantity,
  deleteProduct,
  increaseQuantity,
} from "../redux/storeSlices";
import PriceFormat from "./PriceFormat";

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        paddingVertical: 2,
        paddingHorizontal: 5,
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", width: 180 }}>
        <Image
          source={{ uri: item?.mainImage }}
          style={{ width: 80, height: 80 }}
        />
        <View>
          <Text style={{ color: "black", fontWeight: "800" }}>
            {item?.name.substring(0, 12)}
          </Text>
          <Text>{item?.brandName}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.2,
          borderColor: "grey",
          borderRadius: 4,
          width: 70,
          height: 30,
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
      >
        <Pressable onPress={() => dispatch(decreasingQuantity(item))}>
          <MinusIcon size={16} color={"black"} />
        </Pressable>
        <Text>{item?.quantity}</Text>
        <Pressable onPress={() => dispatch(increaseQuantity(item))}>
          <PlusIcon size={16} color={"black"} />
        </Pressable>
      </View>
      <Text style={{ color: "black", fontWeight: "600" }}>
        <PriceFormat amount={item?.price.amount} />
      </Text>
      <Pressable
        onPress={() => {
          dispatch(deleteProduct(item?.id));
        }}
      >
        <TrashIcon size={20} color={"black"} />
      </Pressable>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({});
