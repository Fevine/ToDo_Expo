import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TodoCard = (props) => {

  const navigation = useNavigation()

  function GoDetail(item) {
    console.log(item.id);
    navigation.navigate('Detail', { item })
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => GoDetail(props)}
    >
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.content}</Text>
    </TouchableOpacity>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 16,
    marginVertical: 8,
    borderRadius: 6,
    borderColor: 'transparent',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#124',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
});