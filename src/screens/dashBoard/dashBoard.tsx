import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Banner from './banner';
import {Header} from '../../components';
import IconNav from './iconNav';
import RecommendPlace from './recommendPlace';

const dashBoard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Banner />
      <IconNav />
      <RecommendPlace />
    </View>
  );
};

export default dashBoard;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f9ff'},
});
