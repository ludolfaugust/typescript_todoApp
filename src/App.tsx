import { isDocument } from '@testing-library/user-event/dist/utils';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import './App.css';
import InputField from "./component/inputfield /InputField"
import { Todo } from './component/model/model';
import TodoList from './component/todolist/TodoList';


const App:React.FC = () => {

 const [todo, setTodo] = useState<string>("");
 const [todos, setTodos] = useState<Todo[]>([]);

 const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if(todo) {
    setTodos([...todos, {id: Date.now(), todo: todo, isDone:false }])
    setTodo("");
  }



 }
 console.log(todos)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
     {todos.map((t)=>(
        <li>{t.todo}</li>
      ))}
      
    </div>
  );
}

export default App;
