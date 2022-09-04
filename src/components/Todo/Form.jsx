import React from 'react'
import styled from "styled-components";


const TodoInputStyled = styled.div`
  .form-input{
    margin-bottom: 25px;
    position: relative;
  }
  input,textarea {
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
    font-size: 12px;
    font-style: italic;
    margin-left: 5px;
    position: absolute;
  }
`

const Form = ({handleSubmit,handleChange,values,error,refArray,children}) => {

    return (
        <TodoInputStyled>
            {console.log('form render:',values)}
            <form onSubmit={handleSubmit}>
                <div className={"form-input"}>
                    <input
                        ref={ref=>{refArray.current["title"] = ref}}
                        type={"text"}
                        name={"title"}
                        onChange={handleChange}
                        value={values.title?? ""}
                        placeholder={"title"}
                    />
                    {error.title && <p className={"msg-error"}>Title required</p>}

                </div>

                <div className={"form-input"}>
                    <textarea
                        ref={ref=>{refArray.current["description"] = ref}}
                        name={"description"}
                        onChange={handleChange}
                        value={values.description?? ""}
                        placeholder={"description"}
                    >

                </textarea>
                    {error.description && <p className={"msg-error"}>Description required</p>}
                </div>


                {children}
            </form>
        </TodoInputStyled>
    );
};

export default Form;