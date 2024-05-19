import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'

type RootStackParamList = {
    Products: { category: string };
};

type Props = {
    category: string
}

const CategoryItem = ({ category }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    return (
        <TouchableOpacity className="w-1/2 items-center justify-center m-2 p-4 bg-gray-200" onPress={() => navigation.navigate('Products', { category: category })}>
            <Text className='text-lg font-bold text-black'> {category}</Text>
        </TouchableOpacity >
    )
}

export default CategoryItem