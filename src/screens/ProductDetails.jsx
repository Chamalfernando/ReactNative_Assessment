import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";

const API_URL =
  "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json";
const { width, height } = Dimensions.get("window");

const ProductDetails = () => {
  const route = useRoute(); // Access the passed product data
  const { product } = route.params; // Destructure the product object

  const id = product.id;

  return (
    <View>
      <CommonHeader />
      <View style={styles.container}>
        {/* Product Image */}
        <Image
          source={{
            uri: product?.mainImage || "https://via.placeholder.com/150",
          }}
          style={styles.productImage}
        />

        {/* Product Name */}
        <Text style={styles.productName}>{product.name}</Text>

        {/* Product Price */}
        <Text style={styles.productPrice}>
          {product.price?.amount} {product.price?.currency}
        </Text>

        {/* Product Brand */}
        <Text style={styles.productBrand}>{product.brandName}</Text>

        {/* Product Status */}
        {product.stockStatus === "OUT OF STOCK" ? (
          <Text style={styles.outOfStock}>Out of Stock</Text>
        ) : (
          <Text style={styles.inStock}>In Stock</Text>
        )}

        {/* Product Color */}
        <Text>Available Color: {product.colour}</Text>

        {/* Product Description or other details */}
        <Text>{product.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  productImage: {
    width: "100%",
    height: 300,
    // resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  productBrand: {
    fontSize: 16,
    marginBottom: 10,
  },
  outOfStock: {
    fontSize: 16,
    color: "red",
    marginBottom: 10,
  },
  inStock: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
  },
});
