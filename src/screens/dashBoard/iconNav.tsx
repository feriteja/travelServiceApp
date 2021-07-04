import React from 'react';
import {Text} from 'react-native';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {iconDashboard} from '../../assets/data/data';

const iconNav = () => {
  return (
    <View style={{marginBottom: 20}}>
      <FlatList
        data={iconDashboard}
        horizontal
        contentContainerStyle={{
          alignSelf: 'baseline',
          paddingHorizontal: 20,
        }}
        keyExtractor={({name}) => name}
        renderItem={({item}) => {
          return (
            <View style={styles.iconStyle}>
              <View style={styles.iconContainer}>
                <Image source={item.img} style={{height: 40, width: 40}} />
              </View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default iconNav;

const styles = StyleSheet.create({
  iconStyle: {alignItems: 'center'},
  iconContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 999,
    backgroundColor: '#fdfdfd',
    marginHorizontal: 5,
    overflow: 'hidden',
    marginVertical: 5,
    elevation: 1,
  },
});
