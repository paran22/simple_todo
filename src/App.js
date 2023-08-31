import "./App.css";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import { NavContextProvider } from "./context/NavContext";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TodoList from "./todoList/TodoList";

function App() {
  return (
    <section className="todo">
      <DarkModeContextProvider>
        <NavContextProvider>
          <Header />
          <TodoList />
        </NavContextProvider>
        <Footer />
      </DarkModeContextProvider>
    </section>
  );
}

export default App;
