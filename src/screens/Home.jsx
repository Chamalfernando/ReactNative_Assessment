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

const { height, width } = Dimensions.get("window");

const API_URL =
  "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json";

const Home = () => {
  const [productsArray, setProductsArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const json = await response.json();
      if (json.result === "success" && Array.isArray(json.data)) {
        setProductsArray(json.data);
      } else {
        console.log("Unexpected data format");
      }

      console.log(json.data);
      setProductsArray(json.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const images = [cabinett, coffeetable, intro];

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.productView}>
        <Image
          source={{ uri: item?.image }}
          alt="product-image"
          style={styles.img}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header />
      <View style={{ flex: 1, objectFit: "window", height: "100%" }}>
        {isLoading ? (
          <Text>loader</Text>
        ) : (
          <FlatList
            data={productsArray}
            contentContainerStyle={styles.container}
            keyExtractor={
              (item, index) => (item?._id ? item._id : index.toString()) //// fallback to index if _id is missing
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
            //       style={{ height: 210 }}
            //       data={images}
            //       scrollAnimationDuration={1000}
            //       renderItem={({ item }) => {
            //         return (
            //           <View>
            //             <Image
            //               source={item}
            //               alt="banner-image"
            //               style={{
            //                 width: "100%",
            //                 height: 270,
            //                 objectFit: "cover",
            //               }}
            //             />
            //           </View>
            //         );
            //       }}
            //     />
            //   </View>
            // }
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 200,
  },
  productView: {
    flex: 1,
    height: height / 3,
    // height: 400,
    borderWidth: 0.5,
    borderColor: "darkgray",
    margin: 5,
    borderRadius: 6,
    marginHorizontal: 10,
    overflow: "hidden",
    position: "relative",
  },
  img: {
    flex: 1,
    objectFit: "cover",
  },
  textView: {
    padding: 10,
  },
});