import React, { useState } from 'react';
import './styles.scss'
import Header from '../Header/Header'
import Todos from '../Todos/Todos'
import Todo from '../../interface/Todo'

function App() {
  const[todos, setTodos] = useState<Array<Todo>>([])
  const[newTodos,setNewTodos] = useState<string>('')


  return (
    <div className="App">
      <Header setNewTodos={setNewTodos} newTodos={newTodos} setTodos={setTodos} todos={todos}/>
      <Todos  todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
