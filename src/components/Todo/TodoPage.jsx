import React from 'react'
import TodoList from "./TodoList.jsx";
import InputCreate from "./InputCreate.jsx";
import useTodoStore from "../../store/useTodoStore.jsx";
import InputEdit from "./InputEdit.jsx";
import styled from "styled-components";

const TodoSection = styled.div`
    width: 400px;
    margin: 0 auto;
  
  h2{
    margin-bottom: 30px;
    text-transform: uppercase;
    text-align: center;
  }
`


const TodoPage = () => {
    const modeEdit = useTodoStore(state=>state.modeEdit)
    return (
        <TodoSection className={"todo-section"}>
            <h2>My todo React</h2>
            {modeEdit ? <InputEdit />:<InputCreate />}
            <TodoList/>
        </TodoSection>
    );
};

export default TodoPage;