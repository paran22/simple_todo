import "./App.css";
import { DarkModeProvider } from "./context/DarkMode";
import { NavProvider } from "./context/Nav";
import { TodoListProvider } from "./context/TodoList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TodoList from "./todoList/TodoList";

function App() {
  return (
    <section className="todo">
      <DarkModeProvider>
        <TodoListProvider>
          <NavProvider>
            <Header />
            <TodoList />
          </NavProvider>
          <Footer />
        </TodoListProvider>
      </DarkModeProvider>
    </section>
  );
}

export default App;
