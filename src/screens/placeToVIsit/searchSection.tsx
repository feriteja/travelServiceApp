import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIon from 'react-native-vector-icons/Ionicons';

const searchSection = () => {
  return (
    <View style={styles.searchSection}>
      <View style={styles.textInputContainer}>
        <IconFeather name="search" size={25} />
        <TextInput
          placeholder="Search destination"
          placeholderTextColor="#aaa"
          style={{flex: 1}}
        />
      </View>
      <View style={styles.optionContainer}>
        <IconIon name="options-outline" size={25} color="#fff" />
      </View>
    </View>
  );
};

export default searchSection;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  textInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ECEEEF',
    paddingHorizontal: 10,
    borderRadius: 999,
    flex: 1,
  },
  optionContainer: {
    backgroundColor: '#1274E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 45,
    width: 45,
    marginLeft: 10,
    borderRadius: 999,
  },
});
