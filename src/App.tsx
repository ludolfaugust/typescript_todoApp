import { isDocument } from '@testing-library/user-event/dist/utils';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import './App.css';
import InputField from "./component/inputfield /InputField"
import { Todo } from './component/model/model';
import TodoList from './component/todolist/TodoList';
import styled from "styled-components";


const Top = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height: 25rem;
background-image:url("https://external-preview.redd.it/1uGjZXE6uY9l3ynHwFp-kLVKCuyuKVLuj1Vlg8Cgra8.jpg?auto=webp&s=e7ce5ca8747a625566701364fe2bee3b1d79078d");
background-repeat: no-repeat;
padding: 2rem 2rem 2rem 2rem;

`;


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
      <Top>
      <div className="heading">"To do pile? I have a To Do pile?!"<p className='heading--small'>Homer J. Simpson</p></div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </Top>
      <TodoList todos={todos} setTodos={setTodos} />
     
      
    </div>
  );
}

export default App;
