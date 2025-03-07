import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TodoCard from '../Components/TodoCard';
import { TempData } from '../Data/TempData';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={TempData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoCard
            id={item.id}
            title={item.title}
            content={item.content}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
});
