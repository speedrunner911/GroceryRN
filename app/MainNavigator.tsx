import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Grocery from './screens/Grocery';
import { GroceryType } from "./types"

const Stack = createNativeStackNavigator<RootStackParamsList>();

export type RootStackParamsList = {
  home: undefined;
  grocery: {
    item: GroceryType;
  };
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" options={{ headerTitle: 'Grocery List' }} component={Home} />
        <Stack.Screen name="grocery" component={Grocery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
