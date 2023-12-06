import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: 'https://www.kikajoy.com/kikajoy-luks-kutu-oyunu-tombala-yilbasi-kutu-oyunlari-kikajoy-8928-99-B.jpg' }} style={styles.imageBackground}>
        <View style={styles.topView}>
          <Text style={styles.title}>TOMBALA</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SinglePlayer')}>
          <Text style={styles.buttonText}>SINGLE PLAYER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MultiPlayer')}>
          <Text style={styles.buttonText}>MULTIPLAYER</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linen',
    padding: 8,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  topView: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  button: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#654321',
  },
  buttonText: {
    color: 'white', // Set the text color to make it visible
  },
});

export default HomeScreen