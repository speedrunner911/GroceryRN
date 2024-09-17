import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';
import { scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import useGrocery from '../hooks/useGrocery';
import GroceryItem from '../components/ui/GroceryItem';

const Home = () => {
  const { groceries: { data } } = useGrocery();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <FlashList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={data || []}
        numColumns={2}
        renderItem={({ item }) => <GroceryItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={100}
        ListEmptyComponent={
          <View mt="$4">
            <Text textAlign="center" color="black">{t('labels.empty_list')}</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingHorizontal: scale(12),
  },
  listContainer: {
    paddingTop: scale(16),
    paddingBottom: scale(24),
  },
});


export default Home;
