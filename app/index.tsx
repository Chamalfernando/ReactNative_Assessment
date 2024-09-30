import React from "react";
import { Provider } from "react-redux";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Intro from "../src/screens/Intro";

export default function App() {
  return (
    // <Provider store={store}>
    //   <NavigationContainer independent={true}>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </Provider>
    <SafeAreaView>
      <View>
        <Intro />
      </View>
    </SafeAreaView>
  );
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
