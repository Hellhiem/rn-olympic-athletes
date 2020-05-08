import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationRoutes } from 'types/common';
import { GamesScreen, AthleteScreen } from 'screens';
import { MainHeader, AthleteHeader } from 'components';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationRoutes.Games} component={GamesScreen} options={{ headerTitle: () => <MainHeader /> }} />
        <Stack.Screen name={NavigationRoutes.Athlete} component={AthleteScreen} options={{ headerTitle: () => <AthleteHeader /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;