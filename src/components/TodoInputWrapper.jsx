import {useRef} from "react";
import styled from "styled-components";

const TodoInputStyled = styled.div`
  input {
    border-radius: 4px;
    border: 1px solid #242424;
    padding: 10px 15px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    width: 100%;
    

  }

  button[type=submit] {
    background-color: #0d6efd;
    color: #ffffff;
    margin-left: 15px;
  }
  
  .msg-error{
    color: red;
  }
`


const TodoInputWrapper = (Component) => (props)=>{
    const refInputTitle = useRef(null)
    return (
        <TodoInputStyled>
            this is a wrapper have common UI
            <Component
                refInput = {refInputTitle}
            />
        </TodoInputStyled>
    );
};

export default TodoInputWrapper;