import React, {useRef, useState} from 'react';
import useTodoStore from "../store/useTodoStore.jsx";
import Todo from "../models/Todo.jsx";
import FormTodo from "./FormTodo.jsx";




const TodoInputAdd = (props) => {

    const addTodo = useTodoStore((state)=>state.addTodo)
    const [todoItem,setTodoItem] = useState(()=>new Todo())
    const refArray = useRef(new Set());

    const [error,setError] = useState({})


    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!todoItem.title || todoItem.title.trim().length ===0){
            refArray.current.title.focus()
            setError(prevError=> ({...prevError, title:true}))
            return;
        }
        setError(prevError=> ({...prevError, title:false}))
        if(!todoItem.description|| todoItem.description.trim().length ===0){
            refArray.current.description.focus()
            setError(prevError=> ({...prevError, description:true}))
            return;
        }
        setError(prevError=> ({...prevError, description:false}))

        todoItem.id= Math.random();
        addTodo(todoItem)
        setTodoItem(new Todo())

    }

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setTodoItem({...todoItem,[name]:value})
        //setTitle(e.target.value)
    }
    return (
        <React.Fragment>
            <h3>Add new Todo</h3>
            <FormTodo
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                todoItem = {todoItem}
                error={error}
                refArray = {refArray}
            >
                <button type={"submit"}>ADD</button>
            </FormTodo>

        </React.Fragment>
    );
};
export default TodoInputAdd;
// export default TodoInputWrapper(TodoInputAdd);