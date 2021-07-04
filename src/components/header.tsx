import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

const header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.textGreeting}>Hi, Feri Teja Kusuma</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <IconMI name="place" size={18} />
          <Text style={styles.textLocation}> Bandung, Indonesia</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginRight: 5}}>
          <IconMCI name="bell" size={35} color="#BDC0C6" />
          <View style={styles.notifBadge} />
        </View>
        <Image
          source={require('../assets/img/self/profile.jpg')}
          style={styles.imgProfile}
        />
      </View>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textGreeting: {
    fontSize: 14,
    color: '#777777',
  },
  textLocation: {
    fontWeight: 'bold',
  },
  imgProfile: {
    height: 40,
    width: 40,
    borderRadius: 99,
  },
  notifBadge: {
    height: 10,
    width: 10,
    borderRadius: 99,
    backgroundColor: 'red',
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
