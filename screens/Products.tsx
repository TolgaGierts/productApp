
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ProductItem from '../src/components/ProductItem';


type RootStackParamList = {
    Products: { category: string };
};

type RouteProps = RouteProp<RootStackParamList, 'Products'>;

function Products() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProps>();

    const { category } = route.params || {};

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        async function fetchCategories() {
            setIsLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, [])

    return (
        <View className='flex-1 p-4 justify-center'>
            {isLoading && <ActivityIndicator size="large" />}
            <Text className='text-lg font-bold text-black uppercase'> {category}</Text>
            <FlatList style={{ flex: 1 }} numColumns={2} data={products} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <ProductItem product={item} />} contentContainerStyle={{ flexGrow: 1 }} scrollEnabled />
        </View>
    );
}

export default Products