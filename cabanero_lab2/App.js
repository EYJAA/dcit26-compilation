import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.info}>Charles Andre B. Cabanero</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.info}>20</Text>

      <Text style={styles.label}>Course/Year/Section:</Text>
      <Text style={styles.info}>
        BS Computer Science, 3rd Year, Section 4
      </Text>

      <Text style={styles.label}>About Me:</Text>
      <Text style={styles.info}>
        I am a Computer Science student who is passionate
        about technology and software development.
        I enjoy solving problems and learning new
        programming languages.
      </Text>

      <Text style={styles.label}>Achievements:</Text>
      <Text style={styles.info}>- High Honors (Senior High School)</Text>
      <Text style={styles.info}>- Elden Lord in Elden Ring</Text>
      <Text style={styles.info}>- Emerald Rank in TeamFight Tactics (Season 14)</Text>

      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.info}>- Java</Text>
      <Text style={styles.info}>- HTML and CSS</Text>
      <Text style={styles.info}>- JavaScript</Text>
      <Text style={styles.info}>- Web Development</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F8',
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
    color: '#333333',
  },

  info: {
    fontSize: 14,
    color: '#444444',
    lineHeight: 20,
  },
});