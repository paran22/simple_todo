import "./App.css";
import { TodoListContext, TodoListProvider } from "./context/TodoList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  return (
    <TodoListProvider>
      <section className="todo">
        <Header />
        <Main />
        <Footer />
      </section>
    </TodoListProvider>
  );
}

export default App;
