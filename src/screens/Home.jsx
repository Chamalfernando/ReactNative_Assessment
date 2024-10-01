import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Carousel } from "react-native-reanimated-carousel";
import { cabinett, coffeetable, intro } from "../assets";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { ShoppingCartIcon } from "react-native-heroicons/outline";
// import IsNewBadge from "../components/IsNewBadge";
import Loader from "../components/Loader";

const { width } = Dimensions.get("window").width;
const { height } = Dimensions.get("window").height;

const API_URL =
  "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json";

const Home = () => {
  const navigation = useNavigation();
  const [productsArray, setProductsArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const json = await response.json();
      if (json.result == "success" && Array.isArray(json.data)) {
        setProductsArray(json.data);
      } else {
        console.log("Unexpected data format");
      }

      console.log(json.data);
      setProductsArray(json.data);
      // setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const picImages = [cabinett, coffeetable, intro];

  const RenderItem = ({ item }) => {
    if (!item) {
      return null;
    }
    return (
      <TouchableOpacity
        style={styles.productView}
        onPress={() => navigation.navigate("ProductDetails", { product: item })}
      >
        <Image
          source={{ uri: item?.mainImage || "https://via.placeholder.com/150" }}
          alt="product-image"
          style={styles.img}
          resizeMode="cover"
        />
        <View style={styles.textView}>
          <Text style={styles.productName}>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <View>
              <Text style={styles.productPrice}>
                {item.price?.amount} {item.price?.currency}
              </Text>
              <Text>{item?.brandName}</Text>
              {item?.stockStatus &&
                (item?.stockStatus == "OUT OF STOCK" ? (
                  <Text style={{ color: "red" }}>{item?.stockStatus}</Text>
                ) : (
                  <Text>{item?.stockStatus}</Text>
                ))}
              <Text>Available Color : {item?.colour}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#f3f3f3",
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 6,
              }}
            >
              <ShoppingCartIcon color={"black"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {/* {item?.isNew && <IsNewBadge />} */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SafeAreaView style={{ flex: 1 }}>
        {isLoading ? (
          <Loader title="Product List is Loading..." />
        ) : (
          <FlatList
            data={productsArray}
            contentContainerStyle={styles.container}
            keyExtractor={
              (item, index) => (item?.id ? item.id : index.toString()) //// fallback to index if _id is missing
            }
            renderItem={RenderItem}
            refreshing={refreshing}
            onRefresh={() => {
              getData();
            }}
            numColumns={1}
            // ListHeaderComponent={
            //   <View>
            //     <Carousel
            //       loop
            //       autoPlay={true}
            //       width={width}
            //       height={height * 0.25}
            //       style={{ height: 210 }}
            //       data={picImages}
            //       scrollAnimationDuration={1000}
            //       renderItem={({ item }) => {
            //         <View>
            //           <Image
            //             source={item}
            //             alt="banner-image"
            //             style={{
            //               width: "100%",
            //               height: 270,
            //               objectFit: "cover",
            //             }}
            //           />
            //         </View>;
            //       }}
            //     />
            //   </View>
            // }
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {},
  container: {
    backgroundColor: "white",
    flexGrow: 1,
  },
  productView: {
    flex: 1,
    height: height / 3,
    height: "100%",
    borderWidth: 0.5,
    borderColor: "blue",
    margin: 5,
    borderRadius: 6,
    marginHorizontal: 10,
    overflow: "hidden",
    position: "relative",
  },
  img: {
    flex: 1,
    objectFit: "cover",
    width: "50%",
    height: 100,
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  textView: {
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "green",
  },
  productStock: {
    display: "flex",
    justifyContent: "flex-end",
    color: "lightblue",
  },
});
