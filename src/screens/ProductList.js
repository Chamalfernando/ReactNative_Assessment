import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/slices/productSlice';

const ProductList = ({navigation}) => {
  const dispatch = useDispatch();
  const {items, status} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail', {product: item})}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ProductList;
