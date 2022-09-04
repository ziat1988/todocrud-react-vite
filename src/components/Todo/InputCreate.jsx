import React from 'react'
import Form from "./Form.jsx";
import useForm from "../../custom-hooks/useForm.jsx";
import Todo from "../../models/Todo.jsx";
import useTodoStore from "../../store/useTodoStore.jsx";

const InputCreate = () => {

    const {handleChange,handleSubmit,values,error,refArray} = useForm(new Todo(),createTodo)

    const addTodoStore = useTodoStore(state=>state.addTodo)
    function createTodo(newTodo){
        addTodoStore(newTodo)
    }

    return (
        <Form handleChange={handleChange} handleSubmit={handleSubmit} values={values} error={error} refArray={refArray}>
            <button type={"submit"}>Add</button>
        </Form>
    );
};

export default InputCreate;