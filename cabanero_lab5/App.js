import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerToggleButton
} from '@react-navigation/drawer';

import Home from './screens/Home';
import Profile from './screens/Profile';
import About from './screens/About';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <DrawerToggleButton />
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerLeft: () => <DrawerToggleButton />
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeStack"
          screenOptions={{ headerShown: false }}
        >

          <Drawer.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ title: 'Home' }}
          />

          <Drawer.Screen
            name="AboutStack"
            component={AboutStack}
            options={{ title: 'About' }}
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
