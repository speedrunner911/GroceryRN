import React, { useEffect } from 'react';
import { Spinner, Text, View } from '@gluestack-ui/themed';
import { useTranslation } from 'react-i18next';
import { useNavigation, CommonActions } from '@react-navigation/native';

import useGrocery from '../hooks/useGrocery';

const Splash = () => {
  const { groceries: { isLoading } } = useGrocery();
  const navigation = useNavigation();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isLoading) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'home'}],
        }),
      );
    }
  }, [isLoading, navigation])

  return (
    <View backgroundColor='#ccc' flex={1} alignItems='center' justifyContent='center'>
      <Text>{t('labels.fetching_data')}...</Text>
      <Spinner mt="$4" size="large" color="blue" />
    </View>
  )
}

export default Splash;