import React from 'react';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // sadece ikon göster
        tabBarStyle: {
          backgroundColor: 'black',
          borderRadius: 50,
          margin: 20,
          height: 60,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="heart-o" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-basket" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="setting" size={24} color="white" />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
