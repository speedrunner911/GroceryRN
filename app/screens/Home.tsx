import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';

import useGrocery from '../hooks/useGrocery';
import GroceryItem from '../components/ui/GroceryItem';
import { scale } from 'react-native-size-matters';

const Home = () => {
  const { groceries: { data } } = useGrocery();

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
            <Text textAlign="center" color="black">Empty Lit</Text>
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
