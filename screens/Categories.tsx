
import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import CategoryItem from '../src/components/CategoryItem';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            setIsLoading(true);
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
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
            <FlatList numColumns={2} data={categories} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <CategoryItem category={item} />} />
        </View>
    );
}

export default Categories