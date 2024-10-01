import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailsView = ({ productData }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      {/* <Text>DetailsView</Text> */}
      {/* Product Name */}
      <Text style={styles.productName}>{productData.name}</Text>

      {/* Product Price */}
      <Text style={styles.productPrice}>
        <Text style={{ color: "black" }}>Product Price : </Text>
        {productData.price?.amount} {productData.price?.currency}
      </Text>

      {/* Product Brand */}
      <Text style={styles.productBrand}>
        Brand Name : {productData.brandName}
      </Text>

      {/* Product Status */}
      {productData.stockStatus === "OUT OF STOCK" ? (
        <Text style={styles.outOfStock}>Out of Stock</Text>
      ) : (
        <Text style={styles.inStock}>In Stock</Text>
      )}

      {/* Product Color */}
      <Text style={{ marginBottom: 10 }}>
        Available Color : {productData.colour}
      </Text>

      {/* Product Description or other details */}
      <Text style={{ marginBottom: 10 }}>{productData.description}</Text>

      {/* Product Sizes Available */}
      <Text style={{ marginBottom: 10 }}>Available Sizes : </Text>
      {productData.sizes && productData.sizes.length === 0 ? (
        <Text>No Sizes</Text>
      ) : (
        <View style={{ flexDirection: "row" }}>
          {productData.sizes.map((size, index) => (
            <Text key={index}>{size + " "}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default DetailsView;

const styles = StyleSheet.create({
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
    color: "black",
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
