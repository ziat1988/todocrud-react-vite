import useTodoStore from "../../store/useTodoStore.jsx";
import TodoItem from "./TodoItem.jsx";
import styled from "styled-components";

const Todos = styled.div`
  margin: 25px 0;
`
const TodoList = () => {
    const todos = useTodoStore((state)=>state.todos)
    return (
        <Todos className={"todo-list"}>
            <ul>
                {todos.map(todo=>
                    <TodoItem todo={todo} key={todo.id}/>
                )}
            </ul>
        </Todos>
    );
};

export default TodoList;