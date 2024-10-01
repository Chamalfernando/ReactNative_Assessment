import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CommonHeader from "../components/CommonHeader";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import PriceFormat from "../components/PriceFormat";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const Cart = () => {
  const navigation = useNavigation();
  const { productData } = useSelector((state) => state?.store);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item) => {
      amt += item?.price.amount * 1;
    });
    setTotalAmt(amt);
  }, [totalAmt]);

  return (
    <View>
      <CommonHeader title={"Cart"} />
      <ScrollView contentContainerStyle={{ paddingBottom: 100, margin: 10 }}>
        {productData.length > 0 ? (
          <>
            <View>
              {productData.map((item) => (
                <CartProduct key={item?.id} item={item} />
              ))}
            </View>
            <View style={{ backgroundColor: "white", padding: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 16, color: "black" }}>SubTotal </Text>
                <Text
                  style={{ fontSize: 16, color: "black", fontWeight: "600" }}
                >
                  <PriceFormat amount={totalAmt} />
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                Toast.show({
                  type: "error",
                  text1: "You are not authorized",
                  text1Style: { color: "red" },
                  text2: "Go back",
                  text2Style: { color: "black" },
                })
              }
              style={{
                backgroundColor: "blue",
                paddingVertical: 8,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
              }}
            >
              <Text style={{ fontSize: 16, color: "white", fontWeight: 600 }}>
                Proceed to Checkout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: "white",
                paddingVertical: 8,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <Text style={{ fontSize: 16, color: "black", fontWeight: 600 }}>
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: "Black",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Your Cart is empty!
            </Text>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: "white",
                paddingVertical: 8,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <Text style={{ fontSize: 16, color: "black", fontWeight: 600 }}>
                Back to Shopping
              </Text>
            </TouchableOpacity> */}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Cart;
