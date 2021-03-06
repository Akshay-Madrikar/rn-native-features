import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import PlacesListScreen, {
  placesListScreenOptions,
} from '../screens/PlacesListScreen';
import PlaceDetailScreen, {
  placeDetailScreenOptions,
} from '../screens/PlaceDetailScreen';
import NewPlaceScreen, {
  newPlaceScreenOptions,
} from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const MyStack = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

export const PlacesNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator screenOptions={defaultNavOptions}>
        <MyStack.Screen
          name="Places"
          component={PlacesListScreen}
          options={placesListScreenOptions}
        />
        <MyStack.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
          options={placeDetailScreenOptions}
        />
        <MyStack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={newPlaceScreenOptions}
        />
        <MyStack.Screen name="Map" component={MapScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};
