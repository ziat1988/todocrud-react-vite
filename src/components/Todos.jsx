import useTodoStore from "../store/useTodoStore.jsx";
import Todo from "./Todo.jsx";

const Todos = () => {
    const todos = useTodoStore((state)=>state.todos)
    return (
        <div>
            <h2>List of todos</h2>
            <ul>
                {todos.map(todo=>
                    <Todo todo={todo} key={todo.id}/>
                )}
            </ul>
        </div>
    );
};

export default Todos;