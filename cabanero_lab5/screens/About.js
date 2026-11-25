import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>

      <Button
        title="GO BACK"
        color="#2196F3"
        onPress={() =>
          navigation.getParent().navigate('HomeStack', {
            screen: 'Home'
          })
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
});