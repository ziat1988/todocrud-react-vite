import styled from "styled-components";
import useTodoStore from "../store/useTodoStore.jsx";

const StyledTodo = styled.div`
  span {
    display: inline-block;
    margin-right: 15px;
  }

`


const Todo = ({todo}) => {
    const deleteTodo = useTodoStore((state) => state.deleteTodo)
    const setModeEdit = useTodoStore((state)=>state.setModeEdit)
    const setTodoEdit = useTodoStore((state)=>state.setToDoEdit)
    const handleDelete = (id, e) => {
        deleteTodo(id)
    }

    const handleEdit = (id,e) => {
        setModeEdit(true)
        setTodoEdit(id)
    }


    return (
        <StyledTodo>
            <li>
                <span>{todo.title}</span>
                <button className={"btn button-edit"} onClick={handleEdit.bind(null,todo.id)}>Edit</button>
                <button className={"btn button-delete"} onClick={handleDelete.bind(null, todo.id)}>Delete</button>
            </li>
        </StyledTodo>

    );
};


export default Todo;