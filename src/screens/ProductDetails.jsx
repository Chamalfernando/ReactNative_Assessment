import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";
import DetailsView from "../components/DetailsView";
import Loader from "../components/Loader";
import PriceFormat from "../components/PriceFormat";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const { width, height } = Dimensions.get("window");

const ProductDetails = () => {
  const route = useRoute(); // Access the passed product data
  const { product } = route.params; // Destructure the product object
  const [isLoading, setIsLoading] = useState(false);

  const id = product.id;
  const productData = product;

  return (
    <View>
      <CommonHeader />
      {isLoading ? (
        <Loader title={"Product Details is Loading.."} />
      ) : (
        <View style={styles.container}>
          {/* Product Image */}
          <Image
            source={{
              uri: product?.mainImage || "https://via.placeholder.com/150",
            }}
            style={styles.productImage}
          />
          <DetailsView productData={productData} />

          <View style={styles.bottomMenu}>
            <View>
              <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>
                <PriceFormat
                  amount={productData?.price}
                  style={{ color: "white", fontWeight: "600" }}
                />
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "yellow",
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  marginRight: 5,
                  color: "black",
                }}
              >
                Add To Cart
              </Text>
              <ArrowRightIcon size={16} color={"black"} />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    flexGrow: 1,
    flexDirection: "column",
    position: "relative",
    height: height,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  bottomMenu: {
    position: "absolute",
    bottom: 60,
    borderWidth: 1,
    borderColor: "black",
    width: width - 20,
    alignSelf: "center",
    borderRadius: 6,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "black",
  },
});
