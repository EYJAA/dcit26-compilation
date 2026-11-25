import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Product({ route }) {

  const { product } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.text}>
        Rating: {product.rating}
      </Text>

      <Text style={styles.text}>
        Description: {product.description}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});