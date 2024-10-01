import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "../src/navigation/DrawerNavigation";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import Toast, { BaseToast } from "react-native-toast-message";

const RootContent = () => {
  return (
    <NavigationContainer independent={true}>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "lightmaroon" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "500",
      }}
    />
  ),
};

export default function App() {
  return (
    <Provider store={store}>
      <RootContent />
      <Toast config={toastConfig} position={"bottom"} visibilityTime={2000} />
    </Provider>
  );
}
// export default function App() {
//   return <RootContent />;
// }
