import { useMutation, useQuery, useQueryClient } from 'react-query';

import { GroceryType } from '../types'
import {
  removeGroceryItem,
  fetchGroceries,
  updateGroceryItem,
} from '../api/groceryService';

const useGrocery = () => {
  const queryClient = useQueryClient();

  const {
    data: groceriesList,
    isLoading: isLoadingGroceries,
    error: fetchError,
  } = useQuery<GroceryType[]>('groceries', fetchGroceries);

  const {
    mutateAsync: update,
    isLoading: isUpdateLoading,
    error: updateError,
  } = useMutation(updateGroceryItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('groceries');
    },
  });

  const {
    mutateAsync: remove,
    isLoading: isRemovingLoading,
    error: removeError,
  } = useMutation(removeGroceryItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('groceries');
    },
  });


  return {
    groceries: {
      data: groceriesList,
      isLoading: isLoadingGroceries,
      error: fetchError,
    },
    updateGrocery: {
      isLoading: isUpdateLoading,
      update,
      error: updateError,
    },
    removeGrocery: {
      isLoading: isRemovingLoading,
      remove,
      error: removeError,
    },
  };
};

export default useGrocery;
