export const fetchProducts = async () => {
  try {
    const response = await fetch(
      'https://s3-eu-west1.amazonaws.com/api.themeshplatform.com/products.json',
    );
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
