import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Search = () => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="h-12 w-full flex-row items-center gap-2 rounded-full bg-white p-2">
        <Feather name="search" size={24} color="gray" />
        <TextInput placeholder="Search your car" />
      </View>
      <View className="absolute right-1 h-12 w-12 items-center justify-center rounded-full bg-black">
        <MaterialCommunityIcons name="tune-variant" size={20} color="white" />
      </View>
    </View>
  );
};

export default Search;
