import { createContext, useContext } from "react";
import useAsyncStorage from "../Hooks/useAsyncstorage";

export const todosContext = createContext();

export const TodoProvider = ({ children }) => {

  const [Todos, setTodos] = useAsyncStorage("Todo", []);

  const data = {
    Todos,
    setTodos,
  };

  return (
    <todosContext.Provider value={data}>
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => useContext(todosContext);