import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Card, Heading, Text, Pressable } from '@gluestack-ui/themed';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { GroceryType } from '../../types';
import { formatLongText } from '../../utils';

const { width } = Dimensions.get('window');

interface GroceryItemProps {
  item: GroceryType;
}

const GroceryItem = ({ item }: GroceryItemProps) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('grocery', { item })} style={styles.container}>
      <Card size="md" variant="elevated" m="$1">
        <FastImage source={{uri: item.image_url}} resizeMode="contain" style={styles.image}/>
        <Heading
          textDecorationLine={item.is_bought ? 'line-through' : 'none'}
          textDecorationColor="black"
          mb="$2"
          size="md"
        >
          {item.name}
        </Heading>
        <Text
          textDecorationLine={item.is_bought ? 'line-through' : 'none'}
          textDecorationColor="black"
          size="sm"
        >
          {formatLongText(item.description)}
        </Text>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width - scale(8) * 3) / 2,
  },
  image: {
    height: scale(75),
  },
});

export default GroceryItem;
