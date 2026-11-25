import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default function Home({ navigation }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUser = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://randomuser.me/api/');

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const data = await response.json();

      setUser(data.results[0]);

    } catch (error) {
      setError('Unable to load user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>

      {loading ? (
        <ActivityIndicator size="large" color="#2196F3" />
      ) : (
        <View style={styles.content}>

          {user && (
            <View style={styles.content}>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Profile', {
                    user: user
                  })
                }
              >
                <Image
                  source={{ uri: user.picture.large }}
                  style={styles.image}
                />
              </TouchableOpacity>

              <Text style={styles.name}>
                {user.name.first} {user.name.last}
              </Text>

            </View>
          )}

          {error !== '' && (
            <Text style={styles.error}>{error}</Text>
          )}

          <Button
            title="RANDOM USER"
            color="#2196F3"
            onPress={fetchUser}
          />

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  content: {
    alignItems: 'center',
  },

  image: {
    width: 160,
    height: 160,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },

  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});