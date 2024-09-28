import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../redux/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Cart Total: {cartItems.length} items</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              title="Remove"
              onPress={() => dispatch(removeFromCart(item))}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Cart;
