import { View, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useTodos } from '../Context/TodoContext';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params; // Get params from navigation
  const { Todos, setTodos } = useTodos();

  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(title.trim() !== item.title || content.trim() !== item.content);
  }, [title, content]);

  const handleSave = () => {
    const updatedTodos = Todos.map(todo =>
      todo.id === item.id ? { ...todo, title, content } : todo
    );
    setTodos(updatedTodos);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />

      <TextInput
        style={styles.textArea}
        value={content}
        onChangeText={setContent}
        placeholder="Enter content"
        multiline
        textAlignVertical="top"
      />

      <TextInput
        style={styles.id}
        value={`Task ID: ${item.id}`}
        editable={false}
      />

      <Button title="Save Changes" onPress={handleSave} disabled={!isChanged} />
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
  input: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  textArea: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 'auto', // Make height adjust dynamically
    minHeight: 300,
    textAlignVertical: 'top', // Ensure text starts at the top
  },
  id: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
});
