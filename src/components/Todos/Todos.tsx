import React, { useCallback } from 'react'
import Todo from '../../interface/Todo'
import './styles.scss'
const Todos = (props:any) => {
    const { todos, setTodos } = props

    const checkTodo = (todo:Todo) => () => {
        console.log('todo',todo)
        todo.checked = !todo.checked
        console.log('apres le click',todo)
    }

    useCallback(() => {
        setTodos([...todos])
    },[todos])

    return (
        <div className='todos'>
            <div className='tache'>
                <h1 className='tache-title'>{todos && todos.length} tâches en cours</h1>
            </div>
            {todos.map((todo:Todo) =>
                <li key={todo.id}>
                    <div className='todos-list'>
                        <input type="checkbox" id={todo.value} name={todo.value}  checked={todo.checked} onChange={checkTodo(todo)}   />
                        <label htmlFor={todo.value}>{todo.value}</label> 
                    </div>
                </li>
            )}
        </div>
    )
}

export default Todos