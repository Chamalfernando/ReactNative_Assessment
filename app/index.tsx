import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Intro from "../src/screens/Intro";
import DrawerNavigation from "../src/navigation/DrawerNavigation";

const RootContent = () => {
  return (
    <NavigationContainer independent={true}>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default function App() {
  return <RootContent />;
}

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

// const App = () => {
//   return (
//     <Provider store={store}>
//       <AppNavigator />
//     </Provider>
//   );
// };

// export default App;
