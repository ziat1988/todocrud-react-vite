import create from 'zustand'
import { produce } from "immer";

const useTodoStore = create ((set)=>({
    todos: [],
    modeEdit: false,
    todoEdit: null,
    indexTodoEdit:null,
    addTodo: (todo)=> set(
        produce(draft => {
            draft.todos.push(todo)
        })
    ),
    updateTodo:(todo,index)=>set(
      produce(draft => {
          draft.todos[index] = todo
      } )
    ),
    deleteTodo: (id)=>set(
        produce(draft=>{
            const indexDelete = draft.todos.findIndex(i=>i.id ===id);
            draft.todos.splice(indexDelete,1)
        })
    ),
    setModeEdit: (isEdit)=>set(
        produce(draft => {
            draft.modeEdit = isEdit
        })
    ),

    setToDoEdit: (id)=>set(
        produce(draft=>{
            const todoIndex = draft.todos.findIndex(i=>i.id ===id);
            if(todoIndex > -1 ){
                draft.indexTodoEdit = todoIndex
                draft.todoEdit = draft.todos[todoIndex]
            }
        })
    )
}))


export default useTodoStore