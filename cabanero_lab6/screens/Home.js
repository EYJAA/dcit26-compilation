import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Home({ navigation }) {

  const products = [
    {
      key: '1',
      title: 'Xbox',
      description: 'A gaming console developed by Microsoft.',
      rating: '5/5'
    },
    {
      key: '2',
      title: 'PS5',
      description: 'A gaming console developed by Sony.',
      rating: '5/5'
    },
    {
      key: '3',
      title: 'Nintendo Switch',
      description: 'A hybrid gaming console developed by Nintendo.',
      rating: '4/5'
    }
  ];

  return (
    <View style={styles.container}>

      <FlatList
        data={products}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.product}
            onPress={() =>
              navigation.navigate('Product', {
                product: item
              })
            }
          >
            <Text style={styles.title}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 15,
  },

  product: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    marginBottom: 8,
  },

  title: {
    fontSize: 16,
    color: 'black',
  },
});