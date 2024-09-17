import Config from 'react-native-config';

import { GroceryType } from '../types';

export const fetchGroceries = async () => {
  try {
    const response = await fetch(`${Config.API_URL}/groceryList`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch grocery items');
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Fetching data failed: ${error.message}`);
  }
};

export const updateGroceryItem = async ({ item }: { item: GroceryType }) => {
  try {
    const response = await fetch(`${Config.API_URL}/groceryList/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error('Failed to update grocery item');
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Updating grocery item failed: ${error.message}`);
  }
};

export const removeGroceryItem = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(`${Config.API_URL}/groceryList/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to remove grocery item');
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Removing grocery item failed: ${error.message}`);
  }
};
