import "./App.css";
import { NavProvider } from "./context/Nav";
import { TodoListProvider } from "./context/TodoList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  return (
    <TodoListProvider>
      <section className="todo">
        <NavProvider>
          <Header />
          <Main />
        </NavProvider>
        <Footer />
      </section>
    </TodoListProvider>
  );
}

export default App;
