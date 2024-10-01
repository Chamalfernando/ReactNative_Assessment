import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { Bars4Icon, ShoppingCartIcon } from "react-native-heroicons/outline";
import { couch } from "../assets";
import { useNavigation } from "expo-router";

const Header = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Bars4Icon color={"#000"} fill={"#000"} size={20} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image source={couch} alt="logo-icon" style={styles.couch} />
        </Pressable>
        <Pressable
          style={styles.cartIcon}
          onPress={() => navigation.navigate("Cart")}
        >
          <ShoppingCartIcon color={"#000"} size={22} />
          <View style={styles.cartCount}>
            <Text style={styles.cartText}>0</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBlockColor: "gray",
  },
  couch: {
    width: 100,
    height: 25,
    objectFit: "contain",
  },
  cartIcon: {
    position: "relative",
  },
  cartCount: {
    borderRadius: 50,
    backgroundColor: "black",
    position: "absolute",
    right: -4,
    top: -6,
    width: 14,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
});
