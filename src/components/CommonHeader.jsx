import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "expo-router";
import { couch } from "../assets";

// import { SafeAreaView } from "react-native-safe-area-context";

const CommonHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon color={"black"} size={20} />
          <Text style={{ color: "darkblack", marginLeft: 5, fontWeight: 600 }}>
            {title}
          </Text>
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

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alighItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBlockColor: "gray",
  },
  logo: {
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
    color: "white",
    fontSize: 10,
    fontWeight: "700",
  },
  couch: {
    width: 100,
    height: 25,
    objectFit: "contain",
  },
});
