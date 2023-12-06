import { Text, SafeAreaView, StyleSheet } from 'react-native';
import TombalaSingle from './src/screens/TombalaSingle'
import TombalaMultiplayer from './src/screens/TombalaMultiplayer'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={"Home"} component={HomeScreen}/>
    <Stack.Screen name={"SinglePlayer"} component={TombalaSingle}/>
    <Stack.Screen name={"MultiPlayer"} component={TombalaMultiplayer}/>
    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
