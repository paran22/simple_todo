import "./App.css";
import { NavProvider } from "./context/Nav";
import { TodoListProvider } from "./context/TodoList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TodoList from "./todoList/TodoList";

function App() {
  return (
    <TodoListProvider>
      <section className="todo">
        <NavProvider>
          <Header />
          <TodoList />
        </NavProvider>
        <Footer />
      </section>
    </TodoListProvider>
  );
}

export default App;
