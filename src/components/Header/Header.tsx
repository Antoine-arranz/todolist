import React, { useCallback } from 'react';
import './styles.scss'
const Header = (props:any) => {
    const {setNewTodos,newTodos, setTodos, todos} = props

    const formSubmitted = (event:any) => {
        event.preventDefault()
        setTodos([
            ...todos,
            {
                id:newTodos.length ,
                value:newTodos,
                checked:false,
            }
        ])
        setNewTodos('')
    }

    const onNewTodoChange = useCallback((event) => {
        setNewTodos(event.target.value);
      }, []);

    return(
    <div className='header'>
        <form onSubmit={formSubmitted} >
        <label htmlFor="newTodo">Enter a Todo:</label>
        <input
            id="newTodo"
            name="newTodo"
            value={newTodos}
            onChange={onNewTodoChange}
            />
        </form>

    </div>




    )
}

export default Header