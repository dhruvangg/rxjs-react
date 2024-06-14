import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <TodoCount />
      <TodoList />
    </div>
  )
}
