import React, {useEffect} from 'react'
import useForm from "../../custom-hooks/useForm.jsx";
import Form from "./Form.jsx";
import useTodoStore from "../../store/useTodoStore.jsx";

const InputEdit = () => {
    const todoEdit = useTodoStore(state=>state.todoEdit)
    const indexTodoEdit = useTodoStore(state=>state.indexTodoEdit)
    const setModeEdit = useTodoStore(state=>state.setModeEdit)
    const updateStore = useTodoStore(state=>state.updateTodo)
    const {handleChange,handleEditSubmit,values, setValues,error,refArray} = useForm(todoEdit,updateTodo)

    useEffect(()=>{
        setValues(todoEdit)
    },[todoEdit])

    function updateTodo(){
        updateStore(values,indexTodoEdit)
        setModeEdit(false)
    }
    return (
        <Form handleChange={handleChange} handleSubmit={handleEditSubmit} values={values} error={error} refArray={refArray}>
            <button type={"submit"}>Modify</button>
            <button type={"button"} onClick={()=>setModeEdit(false)}>Cancel</button>
        </Form>

    );
};

export default InputEdit;