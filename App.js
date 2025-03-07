import MainRoute from './mainRoute';
import { TodoProvider } from './src/Context/TodoContext';

export default function App() {
  return (
    <TodoProvider>
      <MainRoute />
    </TodoProvider>
  );
}

// const styles = StyleSheet.create({});
