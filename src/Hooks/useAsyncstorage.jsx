import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAsyncStorage(storagename, defaultValue = '') {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem(storagename);
        setData(storedData ? JSON.parse(storedData) : defaultValue);
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  React.useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(storagename, JSON.stringify(data));
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    };

    if (data !== null) {
      saveData();
    }
  }, [data]);

  const ManualUpdate = async () => {
    try {
      await AsyncStorage.setItem(storagename, JSON.stringify(data));
    } catch (error) {
      console.error('Error manually updating AsyncStorage:', error);
    }
  };

  return [data, setData, ManualUpdate];
}

export default useAsyncStorage;
