import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/outline";

const SideMenu = () => {
  const navigations = [
    { title: "Home" },
    { title: "Intro" },
    { title: "Cart" },
  ];
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Press menu to navigate
          </Text>
          <Pressable onPress={() => navigation.closeDrawer()}>
            <XMarkIcon size={20} color={"red"} />
          </Pressable>
        </View>
        {navigations.map((title) => (
          <Pressable
            key={title.title}
            style={styles.menu}
            onPress={() => navigation.navigate(title.title)}
          >
            <Text style={styles.menuText}>{title.title}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: { padding: 20 },
  menu: {
    backgroundColor: "black",
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 100,
    width: "80%",
    alignSelf: "center",
  },
  menuText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
  },
});
