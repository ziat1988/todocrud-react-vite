import React, {useEffect, useRef, useState} from 'react';
import useTodoStore from "../store/useTodoStore.jsx";
import FormTodo from "./FormTodo.jsx";


const TodoInputEdit = (props) => {
    const todoEdit = useTodoStore(state=>state.todoEdit)
    const setModeEdit = useTodoStore(state=>state.setModeEdit)
    const refInputTitle = useRef(null)
    const [title,setTitle] = useState(()=>todoEdit.title)
    const [error,setError] = useState(false)

    useEffect(()=>{
        setTitle(todoEdit.title)
        refInputTitle.current.focus()
    },[todoEdit])


    const handleChange= (e)=>{
        setTitle(e.target.value)
    }

    const handleCancelEdit = (e)=>{
        setModeEdit(false)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(title.trim().length === 0){
            setError(true)
            refInputTitle.current.focus()
            return;
        }

        todoEdit.title = title
        setModeEdit(false)

    }

    return (
        <React.Fragment>
            <h3>Edit todo </h3>

            <FormTodo
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                title = {title}
                refInput = {refInputTitle}
                error = {error}
            >
                <button type={"submit"}>Submit</button>
                <button type={"button"} onClick={handleCancelEdit}>Cancel</button>
            </FormTodo>


        </React.Fragment>
    );
};

export default TodoInputEdit;