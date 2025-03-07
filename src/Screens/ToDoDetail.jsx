import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const DetailScreen = ({ route }) => {
  const { item } = route.params; // Get params from navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.id}>Task ID: {item.id}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  id: {
    fontSize: 14,
    color: '#888',
  },
});
