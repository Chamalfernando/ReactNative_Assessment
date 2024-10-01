import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React from "react";

const { height } = Dimensions.get("window");

const Loader = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: -100 }}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: "white",
            fontSize: 16,
          }}
        >
          {title ? title : "Loading is running"}
        </Text>
        <ActivityIndicator size={"large"} color={"orange"} />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    height: height - 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000080",
  },
});
