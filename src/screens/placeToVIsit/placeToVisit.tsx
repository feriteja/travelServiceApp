import React from 'react';
import {ScrollView} from 'react-native';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {Header} from '../../components';
import MenuOption from './menuOption';
import PlaceItem from './placeItem';
import SearchSection from './searchSection';

const placeToVisit = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchSection />
      <MenuOption />
      <PlaceItem />
    </ScrollView>
  );
};

export default placeToVisit;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f9ff'},
});
