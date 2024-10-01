import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { intro } from "../assets";
import { useNavigation } from "expo-router";

const { height } = Dimensions.get("window");

const Intro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top */}
      <View style={styles.top}>
        <Image source={intro} alt="intro-image" style={styles.introImg} />
      </View>

      {/* Bottom */}
      <View style={styles.bottom}>
        <Text style={styles.title}>Great place to buy Products online</Text>
        <Text style={styles.subtitle}>Complete your order in 3 easy steps</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: height,
  },
  top: {
    height: height / 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  introImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    marginTop: -10,
  },
  bottom: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#000",
  },
});

export default Intro;
