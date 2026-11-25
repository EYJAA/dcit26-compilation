import React from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >

      <View style={styles.container}>

        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
          style={styles.image}
        />

        <ScrollView style={styles.scrollView}>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </Text>

          <Text style={styles.text}>
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>

          <Text style={styles.text}>
            Curabitur pretium tincidunt lacus. Nulla
            gravida orci a odio. Nullam varius, turpis
            et commodo pharetra, est eros bibendum
            elit, nec luctus magna felis sollicitudin
            mauris. Integer in mauris eu nibh euismod
            gravida.
          </Text>

          <Text style={styles.text}>
            Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit
            amet, ante.
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </Text>

          <Text style={styles.text}>
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>

          <Text style={styles.text}>
            Aenean commodo ligula eget dolor. Aenean
            massa. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies
            nec, pellentesque eu, pretium quis, sem.
          </Text>

        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button
            title="CLOSE"
            color="red"
            onPress={onClose}
          />
        </View>

      </View>

    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 45,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15,
    resizeMode: 'contain',
  },

  scrollView: {
    flex: 1,
    marginBottom: 15,
  },

  text: {
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 20,
    marginBottom: 15,
  },

  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
});