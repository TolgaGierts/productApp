import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    ProductDetail: { productId: number };
};

type Props = {
    product: {
        id: number;
        title: string;
        price: number;
        category: string;
        image: string;
        description: string;
        rating: {
            count: number;
            rate: number;
        };
    };
};

const CategoryItem = ({ product }: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity
            className="flex-1 items-center justify-between m-2 p-6 bg-white border border-gray-200 rounded-lg shadow-black drop-shadow-sm"
            onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
        >
            <Image source={{ uri: product.image }} className="w-full h-36" resizeMode="contain" />
            <Text className="font-medium text-black mt-4">{product.title}</Text>
            <Text className="text-lg font-bold text-gray-600 mt-4">${product.price}</Text>
        </TouchableOpacity>
    );
};

export default CategoryItem;
