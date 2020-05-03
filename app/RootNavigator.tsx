import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationRoutes } from 'types/common';
import GamesContainer from 'screens/Games/Games.container';
import { MainHeader } from 'components';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationRoutes.Games} component={GamesContainer} options={{ headerTitle: () => <MainHeader /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;