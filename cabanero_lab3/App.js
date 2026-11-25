import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setItems([...items, item]);
      setItem('');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={item}
          onChangeText={setItem}
        />

        <Button
          title="ADD"
          onPress={addItem}
        />
      </View>

      <ScrollView>
        {items.map((value, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.itemText}>{value}</Text>
          </View>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
    paddingTop: 50,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },

  listItem: {
    backgroundColor: '#808080',
    borderWidth: 1,
    borderColor: '#555555',
    padding: 15,
    marginBottom: 5,
  },

  itemText: {
    fontSize: 16,
    color: 'black',
  },
});