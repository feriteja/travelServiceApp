import {BaseNavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {banner as dataBanner} from '../../assets/data/data';

const {height, width} = Dimensions.get('screen');

type dotType = {
  scrollX: Animated.SharedValue<number>;
  index: number;
};

const BANNER_WIDTH = width - 40;

const Dot = ({scrollX, index}: dotType) => {
  const aniStyle = useAnimatedStyle(() => {
    const widthDot = interpolate(
      scrollX.value,
      [
        (index - 1) * BANNER_WIDTH,
        index * BANNER_WIDTH,
        (index + 1) * BANNER_WIDTH,
      ],
      [10, 20, 10],
      Extrapolate.CLAMP,
    );

    const opacityDot = interpolate(
      scrollX.value,
      [
        (index - 1) * BANNER_WIDTH,
        index * BANNER_WIDTH,
        (index + 1) * BANNER_WIDTH,
      ],
      [0.6, 1, 0.6],
      Extrapolate.CLAMP,
    );

    return {
      width: widthDot,
      opacity: opacityDot,
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: 10,
          borderRadius: 20,
          marginHorizontal: 4,
          backgroundColor: '#444',
        },
        aniStyle,
      ]}
    />
  );
};

const banner = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.bannerContainer}>
      <View style={{borderRadius: 10, overflow: 'hidden'}}>
        <FlatList
          data={dataBanner}
          horizontal
          pagingEnabled
          renderScrollComponent={props => (
            <Animated.ScrollView {...props} onScroll={scrollHandler} />
          )}
          showsHorizontalScrollIndicator={false}
          style={{height: 240}}
          keyExtractor={(d, idx) => idx.toString()}
          renderItem={({index, item}) => {
            return (
              <View
                style={{
                  height: 240,
                  width: BANNER_WIDTH,
                  elevation: 1,
                }}>
                <Image source={item.img} style={styles.bannerImg} />
              </View>
            );
          }}
        />
      </View>
      <View style={{height: 10}} />
      <View style={styles.indicatorContainer}>
        {dataBanner.map((dot, idx) => {
          return <Dot key={idx} index={idx} scrollX={scrollX} />;
        })}
      </View>
    </View>
  );
};

export default banner;

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 20,

    // backgroundColor: 'red',
  },
  bannerImg: {
    resizeMode: 'cover',
    width: BANNER_WIDTH,
    height: 240,
  },
  indicatorContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
