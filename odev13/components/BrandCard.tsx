import { View, Text, Image } from 'react-native';
import React from 'react';
import { Brand } from '@/types/brand';

type Props = {
  brand: Brand;
};
const BrandCard = ({ brand }: Props) => {
  return (
    <View className="flex-1 items-center justify-between gap-2">
      <View className="h-20 w-20 items-center justify-center rounded-full bg-black">
        <Image source={brand.image} className="h-12 w-12" />
      </View>
      <Text>{brand.name}</Text>
    </View>
  );
};

export default BrandCard;
