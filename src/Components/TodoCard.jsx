import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTodos } from '../Context/TodoContext';
import { Ionicons } from '@expo/vector-icons';

const TodoCard = (props) => {
  const navigation = useNavigation();
  const { Todos, setTodos } = useTodos();

  function GoDetail(item) {
    console.log(item.id);
    navigation.navigate('Detail', { item });
  }

  function handleDelete() {
    setTodos(Todos.filter(todo => todo.id !== props.id));
  }

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => GoDetail(props)}
      >
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content} numberOfLines={3}>{props.content}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Ionicons name="trash-outline" size={24} color="#ff7777" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    backgroundColor: '#ddd',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  textContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
  },
  deleteButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto-Regular",
    fontWeight: "200",
    color: '#124',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: '#555',
  },
});
