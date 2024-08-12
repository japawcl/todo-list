import "./App.css";
import TodoList from "./pages/TodoList";
import { TodoProvider } from "./providers/useTodo";

function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
