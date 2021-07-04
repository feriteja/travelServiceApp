import React from 'react';
import {Image} from 'react-native';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {place} from '../../assets/data/data';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {rootParams} from '../../config/router';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {homeParams} from '../../config/router/home';
import {StackNavigationProp} from '@react-navigation/stack';

type IitemCardType = {
  name: string;
  image: any[];
};

type placeNavProps = CompositeNavigationProp<
  BottomTabNavigationProp<homeParams, 'placeToVisit'>,
  StackNavigationProp<rootParams>
>;

const ItemCard = ({image, name}: IitemCardType) => {
  const navigation = useNavigation<placeNavProps>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('placeDetail', {image, name})}
      style={styles.cardContainer}>
      <Image source={image[1]} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{name}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          {[...Array(5)].map((item, idx) => (
            <IconAnt name="star" key={idx} size={16} color="#F79F06" />
          ))}
        </View>
        <Text style={styles.textReview}>(2001 Reviews)</Text>
      </View>
    </TouchableOpacity>
  );
};

const placeItem = () => {
  return (
    <View>
      <FlatList
        data={place}
        scrollEnabled={false}
        contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 80}}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        keyExtractor={({name}) => name}
        renderItem={({item}) => <ItemCard {...item} />}
      />
    </View>
  );
};

export default placeItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 5,
    elevation: 1,
  },
  cardImage: {
    height: 170,
    borderRadius: 15,
    width: undefined,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textReview: {
    color: '#aaa',
  },
});
