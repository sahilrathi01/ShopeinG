import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from '../screen/Product';
import SeeAlll from '../screen/SeeAlll';
import ProductDetails from '../screen/ProductDetails';
import Author from '../screen/Author';
import Fav from '../screen/Fav';
import TabNavigation from './TabNavigation';
import Food from '../screen/Food';
import Many from '../screen/Many';

const Stack = createNativeStackNavigator();

const StakeNavigation = () => {
  return ( 
    <NavigationContainer >
      <Stack.Navigator  initialRouteName='Many'>
        <Stack.Screen name="Product" component={Product} options={{headerShown:false}}/>
        <Stack.Screen name="SeeAll" component={SeeAlll} options={{headerShown:false}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
        <Stack.Screen name="Author" component={Author} options={{headerShown:false}}/>
        <Stack.Screen name="fav" component={Fav} options={{headerShown:false}}/>
        <Stack.Screen name="TabNavigation" component={TabNavigation } options={{headerShown:false}}/>
        <Stack.Screen name="Food" component={Food } options={{headerShown:false}}/>
        <Stack.Screen name="Many" component={Many } options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StakeNavigation