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


  return (
    <div className="App">
      <span className="heading">"To do pile? I have a To Do pile?!"Homer J. Simpson</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
     
      
    </div>
  );
}

export default App;
