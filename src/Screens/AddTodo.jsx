import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useTodos } from '../Context/TodoContext';
import { v4 as uuidv4 } from 'uuid';

const AddTodoScreen = ({ navigation }) => {

  const { Todos, setTodos } = useTodos()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddTodo = () => {
    if (title.trim() && content.trim()) {
      // Save the new todo (You can implement AsyncStorage or Context API here)
      setTodos([...Todos, {
        id: uuidv4(),
        title,
        content,
      }])
      console.log('New Todo:', { title, content });
      navigation.goBack(); // Navigate back after adding
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter details"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
});
