import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import Home from './screens/Home';
import Grocery from './screens/Grocery';
import Splash from './screens/Splash';
import { GroceryType } from "./types"

const Stack = createNativeStackNavigator<RootStackParamsList>();

export type RootStackParamsList = {
  splash: undefined;
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
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name="home" options={{ headerTitle: t('headers.grocery_list') }} component={Home} />
        <Stack.Screen name="grocery" component={Grocery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
