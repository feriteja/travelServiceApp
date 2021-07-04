import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Falsy,
} from 'react-native';
import {rootParams} from '../config/router';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';

type ProfileScreenRouteProp = RouteProp<rootParams, 'placeDetail'>;

const {height, width} = Dimensions.get('screen');

const imageWidth = width - 40;

const placeDetail = () => {
  const {name, image} = useRoute<ProfileScreenRouteProp>().params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <IconEntypo
          name="chevron-left"
          size={30}
          style={styles.btnBack}
          color="#000"
        />
        <IconEntypo
          name="share"
          size={22}
          style={styles.btnShare}
          color="#000"
        />
        <FlatList
          horizontal
          data={image}
          pagingEnabled
          keyExtractor={(data, index) => index.toString()}
          renderItem={({item}) => (
            <Image style={styles.imageDetail} source={item} />
          )}
        />
      </View>
      <View style={styles.content}>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.textTitle}>{name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              {[...Array(5)].map((item, idx) => (
                <IconAnt name="star" key={idx} color="#F79F06" />
              ))}
            </View>
            <Text style={styles.textRating}>4.9</Text>
          </View>
        </View>
        <View style={styles.About}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>About</Text>
          <Text style={{letterSpacing: 1.2}}>
            You will get a complete travel package on recommend places, Package
            in the form of airplane tickets. hotels, transportation, etc
          </Text>
        </View>
        <View style={styles.Galery}>
          <Text
            style={{
              fontWeight: 'bold',
              marginHorizontal: 20,
              fontSize: 18,
              marginBottom: 10,
            }}>
            Galery
          </Text>
          <FlatList
            data={image}
            horizontal
            keyExtractor={(data, index) => index.toString()}
            renderItem={({item}) => {
              return <Image source={item} style={styles.galeryImg} />;
            }}
          />
        </View>
      </View>
      <View style={styles.purchase}>
        <View style={styles.price}>
          <Text style={{fontSize: 26, fontWeight: 'bold'}}>$450</Text>
          <Text>/package</Text>
        </View>
        <View style={styles.btnBook}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
            Book now
          </Text>
        </View>
      </View>
    </View>
  );
};

export default placeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafaff',
  },
  imageDetail: {
    width: imageWidth,
    height: 300,
  },
  imageContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 30,
    overflow: 'hidden',
  },
  btnBack: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: '#fffff8cc',
    left: 10,
    top: 10,
    borderRadius: 999,
  },
  btnShare: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: '#fffff8cc',
    right: 10,
    top: 10,
    borderRadius: 999,
    padding: 4,
  },
  content: {
    // marginHorizontal: 20,
    marginTop: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textRating: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  About: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  Galery: {
    marginTop: 20,
  },
  galeryImg: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  purchase: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnBook: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1E8DE4',
    borderRadius: 999,
  },
});
