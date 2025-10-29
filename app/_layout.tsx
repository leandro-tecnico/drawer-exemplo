import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerType: 'front',
          drawerActiveTintColor: '#5e36a5ff',
          drawerLabelStyle: { fontSize: 18 },
        }}>
        <Drawer.Screen
          name="index"
          options={{ title: 'Início' }}
        />
        <Drawer.Screen
          name="profile"
          options={{ title: 'Perfil' }}
        />
        <Drawer.Screen
          name="settings"
          options={{ title: 'Configurações' }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
} 