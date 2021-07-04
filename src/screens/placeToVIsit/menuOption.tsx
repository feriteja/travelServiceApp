import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const menuOptionData = ['All', 'Popular', 'Favorite', 'Nearest'];

const menuOption = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  return (
    <View style={styles.menuOptionContainer}>
      <FlatList
        data={menuOptionData}
        horizontal
        contentContainerStyle={{paddingHorizontal: 20}}
        keyExtractor={(data, idx) => data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setActiveMenu(index)}
              style={[
                styles.menuOption,
                {backgroundColor: activeMenu == index ? '#1C89E1' : '#ECEEEF'},
              ]}>
              <Text
                style={[
                  styles.textMenu,
                  {color: activeMenu == index ? '#ddd' : '#999'},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default menuOption;

const styles = StyleSheet.create({
  menuOptionContainer: {
    marginVertical: 15,
  },
  menuOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 99,
    backgroundColor: 'rgb(236,238,240)',
  },
  textMenu: {
    color: '#fafaff',
  },
});
