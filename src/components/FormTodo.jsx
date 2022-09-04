import React from 'react'
import styled from "styled-components";

const TodoInputStyled = styled.div`
  
  .form-input{
    margin-bottom: 15px;
  }
  input {
    border-radius: 4px;
    border: 1px solid #242424;
    padding: 10px 15px;
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


const FormTodo = (props) => {
    return (
        <TodoInputStyled>
            <form onSubmit={props.handleSubmit}>
                <div className={"form-input"}>
                    <input ref={ref=>{props.refArray.current["title"] = ref}}
                           type={"text"}
                           name={"title"}
                           onChange={props.handleChange}
                           value={props.todoItem.title ?? ""}/>
                    {props.error.title && <p className={"msg-error"}>Title required</p>}
                </div>
                <div className={"form-input"}>
                     <textarea
                         ref={ref=>{props.refArray.current["description"] = ref}}
                         name={"description"}
                         onChange={props.handleChange}
                         value={props.todoItem.description?? ""}
                     >

                </textarea>
                    {props.error.description && <p className={"msg-error"}>decription required</p>}
                </div>

                {props.children}
            </form>
        </TodoInputStyled>
    );
};

export default FormTodo;