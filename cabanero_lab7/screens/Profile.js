import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function Profile({ route }) {

  const { user } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Image
        source={{ uri: user.picture.large }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {user.name.title} {user.name.first} {user.name.last}
      </Text>

      <View style={styles.section}>

        <Text style={styles.heading}>About</Text>

        <Text style={styles.text}>
          Age: {user.dob.age}
        </Text>

        <Text style={styles.text}>
          Birthday: {user.dob.date.substring(0, 10)}
        </Text>

        <Text style={styles.text}>
          Gender: {user.gender}
        </Text>

        <Text style={styles.text}>
          Nationality: {user.nat}
        </Text>

      </View>

      <View style={styles.section}>

        <Text style={styles.heading}>Address</Text>

        <Text style={styles.text}>
          Street: {user.location.street.number}{' '}
          {user.location.street.name}
        </Text>

        <Text style={styles.text}>
          City: {user.location.city}
        </Text>

        <Text style={styles.text}>
          State: {user.location.state}
        </Text>

        <Text style={styles.text}>
          Country: {user.location.country}
        </Text>

        <Text style={styles.text}>
          Postal Code: {user.location.postcode}
        </Text>

        <Text style={styles.text}>
          Latitude: {user.location.coordinates.latitude}
        </Text>

        <Text style={styles.text}>
          Longitude: {user.location.coordinates.longitude}
        </Text>

        <Text style={styles.text}>
          Timezone: {user.location.timezone.description}
        </Text>

        <Text style={styles.text}>
          UTC Offset: {user.location.timezone.offset}
        </Text>

      </View>

      <View style={styles.section}>

        <Text style={styles.heading}>Contact</Text>

        <Text style={styles.text}>
          Email: {user.email}
        </Text>

        <Text style={styles.text}>
          Phone: {user.phone}
        </Text>

        <Text style={styles.text}>
          Cellphone: {user.cell}
        </Text>

      </View>

      <View style={styles.section}>

        <Text style={styles.heading}>Account Information</Text>

        <Text style={styles.text}>
          Username: {user.login.username}
        </Text>

        <Text style={styles.text}>
          UUID: {user.login.uuid}
        </Text>

        <Text style={styles.text}>
          Date Registered: {user.registered.date.substring(0, 10)}
        </Text>

        <Text style={styles.text}>
          Years Registered: {user.registered.age}
        </Text>

        <Text style={styles.text}>
          ID Type: {user.id.name || 'N/A'}
        </Text>

        <Text style={styles.text}>
          ID Number: {user.id.value || 'N/A'}
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },

  content: {
    padding: 20,
    paddingBottom: 30,
  },

  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

  section: {
    marginBottom: 20,
  },

  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777777',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 5,
    marginBottom: 8,
  },

  text: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
});