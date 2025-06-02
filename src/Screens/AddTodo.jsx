import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';
import { useTodos } from '../Context/TodoContext';

const AddTodoScreen = ({ navigation }) => {
  const { Todos, setTodos } = useTodos();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddTodo = () => {
    if (title.trim() && content.trim()) {
      setTodos([
        ...Todos,
        {
          id: uuid.v4(),
          title,
          content,
        },
      ]);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 24,
    fontFamily: "Pacifico-Regular",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc7',
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    fontWeight: 100,
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textArea: {
    height: "100%",
    borderColor: '#ccc7',
    borderRadius: 2,
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    fontWeight: 100,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    textAlignVertical: "top",
    flex: 1,
  },
});
