import styled from "styled-components";
import useTodoStore from "../../store/useTodoStore.jsx";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child){
    margin-bottom: 8px;
  }

  .item-info{
    max-width: 240px;
    &.--title{
      font-weight: 700;
    }
  }
  
  span {
    display: inline-block;
    margin-right: 15px;
  }

  .button-edit{
    background-color: #5CB85C;
    color: #ffffff;
    margin-right: 2px;
  }
  .button-delete{
    background-color: #D9534F;
    color: #ffffff;
  }

`

const TodoItem = ({todo}) => {
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
        <Item>
            <div className={"item-info"}>
                <span className={"item-info --title"}>{todo.title}</span>
                <span className={"item-info --description"}>{todo.description}</span>
            </div>
            <div className={"item-btn"}>
                <button className={"btn button-edit"} onClick={handleEdit.bind(null,todo.id)}>Edit</button>
                <button className={"btn button-delete"} onClick={handleDelete.bind(null, todo.id)}>Delete</button>
            </div>
        </Item>


    );
};


export default TodoItem;