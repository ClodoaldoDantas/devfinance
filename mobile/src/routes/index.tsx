import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { theme } from '../theme';

const AppTab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        sceneContainerStyle={{
          backgroundColor: theme.colors.background,
        }}
        tabBarOptions={{
          activeTintColor: theme.colors.green,
          inactiveTintColor: theme.colors.text,
          labelPosition: 'beside-icon',
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 56,
          },
        }}
      >
        <AppTab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Listagem',
            tabBarIcon: ({ size, color }) => (
              <Feather name="dollar-sign" size={size} color={color} />
            ),
          }}
        />
        <AppTab.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Cadastrar',
            tabBarIcon: ({ size, color }) => (
              <Feather name="list" size={size} color={color} />
            ),
          }}
        />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
