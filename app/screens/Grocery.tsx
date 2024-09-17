import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {
  ButtonSpinner, Card, Heading, Text, Switch, View, Input,
  InputField, Button, ButtonText, ButtonIcon, AddIcon, RemoveIcon,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import useGrocery from '../hooks/useGrocery';
import { RootStackParamsList } from '../MainNavigator';
import { scale } from 'react-native-size-matters';
import { GroceryType } from '../types';

interface GroceryProps {
  route: CreateEventStep2Type;
}

type CreateEventStep2Type = RouteProp<
  RootStackParamsList,
  'grocery'
>;

const Grocery = ({ route }: GroceryProps) => {
  const {params: {item}} = route;
  const navigation = useNavigation();
  const { t } = useTranslation();

  const {
    updateGrocery: { update, isLoading: isUpdatingLoading },
    removeGrocery: { remove, isLoading: isRemovingLoading},
  } = useGrocery();

  const [isBought, setIsBought] = useState(item.is_bought || false);
  const [quantity, setQuantity] = useState(String(item.quantity));
  const [canUpdate, setCanUpdate] = useState(false);

  const onIncreaseQuantity = () => {
    setQuantity((prevQuantity) => String(parseInt(prevQuantity) + 1));
  };

  const onDecreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = parseInt(prevQuantity) - 1;
      return newQuantity > 0 ? String(newQuantity) : '1';
    });
  };

  useEffect(() => {
    const hasChanged = isBought !== item.is_bought || quantity !== String(item.quantity);
    setCanUpdate(hasChanged);
  }, [isBought, quantity]);

  useEffect(() => {
    navigation.setOptions({ title: item.name });
  }, [item.name, navigation]);

  const onRemoveItem = async () => {
    try {
      await remove({
        id: String(item.id),
      });
      navigation.navigate('home');
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const onUpdateItem = async () => {
    const updatedItem: GroceryType = {
      ...item,
      is_bought: isBought,
      quantity: Number(quantity),
    };
    try {
      await update({ item: updatedItem });
      navigation.navigate('home');
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  return (
    <Card size="md" variant="elevated" m="$2">
      <FastImage source={{uri: item.image_url}} resizeMode="contain" style={styles.image}/>
      <Heading mb="$2" size="md">
        {item.name}
      </Heading>
      <Text size="sm">{item.description}</Text>
      <View mt="$2" alignItems="center" flexDirection="row">
        <Text mr="$2">{t('labels.bought')}:</Text>
        <Switch
          size="md"
          isDisabled={false}
          value={isBought}
          onChange={() => setIsBought(!isBought)}
        />
      </View>
      <View mt="$2">
        <Text>{t('label.quantity')}:</Text>
        <View mt="$2" alignItems="center" flexDirection="row">
          <Button mr="$4" onPress={onDecreaseQuantity} disabled={quantity === '1'}>
            <ButtonIcon as={RemoveIcon} />
          </Button>
          <Input variant="outline" size="md" width={scale(45)}>
            <InputField
              keyboardType="number-pad"
              value={quantity}
              textAlign="center"
              onChangeText={(newValue) => setQuantity(newValue)}
            />
          </Input>
          <Button ml="$4" onPress={onIncreaseQuantity}>
            <ButtonIcon as={AddIcon} />
          </Button>
        </View>
      </View>
      <Button mt="$4" bg={isUpdatingLoading || !canUpdate ? '$darkBlue600' : ''} onPress={onUpdateItem} isDisabled={isUpdatingLoading || !canUpdate}>
        {isUpdatingLoading && <ButtonSpinner mr="$1" />}
        <ButtonText>{t('buttons.update')}</ButtonText>
      </Button>
      <Button mt="$4" bgColor="red" onPress={onRemoveItem} isDisabled={isRemovingLoading}>
        {isRemovingLoading && <ButtonSpinner mr="$1" />}
        <ButtonText>{t('buttons.remove')}</ButtonText>
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
  },
});

export default Grocery;
