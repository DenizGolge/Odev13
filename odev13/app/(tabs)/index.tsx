import BrandCard from '@/components/BrandCard';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Search from '@/components/Search';
import { useBrands } from '@/hooks/useBrands';
import { useCars } from '@/hooks/useCars';
import { FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const { data: cars } = useCars();
  const { data: brands } = useBrands();
  return (
    <SafeAreaView>
      <View className="mx-6 gap-6">
        <Header fullname="Deniz Nabi Gençler" />
        <Search />
        <FlatList
          data={brands}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BrandCard brand={item} />}
          numColumns={4}
        />
      </View>
      <View className="mt-9 rounded-tl-3xl rounded-tr-3xl bg-white p-4">
        <View className="mx-2 flex-row items-center justify-between">
          <Text className="text-xl font-bold">Popular Car</Text>
          <Text className="text-gray-400">View All</Text>
        </View>
        <FlatList
          className="mt-6"
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card car={item} />}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
