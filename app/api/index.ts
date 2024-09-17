import Config from 'react-native-config';

import { GroceryType } from '../types';

export const fetchGroceries = async () => {
  try {
    const response = await fetch(`${Config.API_URL}/groceryList`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Fetching data failed: ${error.message}`);
  }
};

export const addGroceryItem = async (newItem) => {
  try {
    const response = await fetch(`${Config.API_URL}/groceryList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) {
      throw new Error('Error adding item');
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Adding grocery item failed: ${error.message}`);
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
      throw new Error('Error deleting item');
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Removing grocery item failed: ${error.message}`);
  }
};
