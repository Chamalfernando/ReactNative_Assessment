import { StyleSheet, Text } from "react-native";
import React from "react";

const PriceFormat = ({ amount, style }) => {
  const formattedAmount = new Number(amount?.amount).toLocaleString("en-Us", {
    style: "currency",
    currency: amount?.currency,
    minimumFractionDigits: 2,
  });
  return <Text style={style}>{formattedAmount}</Text>;
};

export default PriceFormat;

const styles = StyleSheet.create({});
