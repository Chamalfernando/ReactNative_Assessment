import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductList from './screens/ProductList';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';

const AppNavigator = createStackNavigator({
  ProductList: {screen: ProductList},
  ProductDetail: {screen: ProductDetail},
  Cart: {screen: Cart},
});

export default createAppContainer(AppNavigator);
