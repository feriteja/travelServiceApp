import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {place} from '../../assets/data/data';
import {StackNavigationProp} from '@react-navigation/stack';
import {homeParams} from '../../config/router/home';

type SeeAllNavProp = StackNavigationProp<homeParams>;

type IcardPlaceType = {
  name: string;
  image: any[];
};

const CardPlace = ({image, name}: IcardPlaceType) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image[0]} style={styles.cardImage} />
      <Text style={styles.cardTextTitle}>{name}</Text>
      <View style={{flexDirection: 'row'}}>
        {[...Array(5)].map((item, idx) => (
          <IconAnt name="star" key={idx} color="#F79F06" />
        ))}
      </View>
    </View>
  );
};

const recommendPlace = () => {
  const navigation = useNavigation<SeeAllNavProp>();
  return (
    <View>
      <View style={styles.navStyle}>
        <Text style={styles.textTitle}>Popular Flights</Text>
        <TouchableOpacity onPress={() => navigation.navigate('placeToVisit')}>
          <Text style={styles.textSeeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={place}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            paddingBottom: 90,
          }}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          keyExtractor={(data, idx) => idx.toString()}
          renderItem={({item, index}) => {
            return <CardPlace {...item} />;
          }}
        />
      </View>
    </View>
  );
};

export default recommendPlace;

const styles = StyleSheet.create({
  navStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSeeAll: {
    color: '#83E0f0',
    textShadowRadius: 1,
  },
  cardContainer: {
    width: 140,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 1,
  },
  cardImage: {
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: 5,
    height: 160,
    width: 120,
    borderRadius: 15,
  },
  cardTextTitle: {fontWeight: 'bold'},
});
