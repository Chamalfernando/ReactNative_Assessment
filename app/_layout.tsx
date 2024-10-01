import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { Slot } from "expo-router";
import "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
    // <Provider store={store}>
    //   <Slot />
    // </Provider>
  );
}
