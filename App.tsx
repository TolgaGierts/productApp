import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Categories from './screens/Categories';
import Products from './screens/Products';
import ProductDetailScreen from './screens/ProductDetail';




const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={Categories} options={{ title: 'Kategoriler', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#496584' }, headerTintColor: '#fff' }} />
        <Stack.Screen name="Products" component={Products} options={{ title: 'Urunler', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#496584' }, headerTintColor: '#fff' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Urunler', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#496584' }, headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


