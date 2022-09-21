import React, { FC } from 'react';
import { Todo } from '../model/model';
import {FaThumbsDown} from "react-icons/fa";
import {ImPencil2} from "react-icons/im";
import {FaThumbsUp} from "react-icons/fa";
import styled from "styled-components";
import "../../App.css"
// import {
//     Tooltip,
//   } from 'react-tippy';
  
//   import 'react-tippy/dist/tippy.css';

interface Props {
    todo: Todo; 
    todos: Todo[]; 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    
}



const TodoSingle = styled.form`
    display: flex;
    width: 29.5%;
    border-radius: 5px;
    padding: 15px;
    margin-top: 15px;
    background-color: #FFD90F;
    align-items: center;
    border: 3px solid #fff;
    


    @media (max-width: 700px) {
        width: 90%;
        flex-direction: row;
    }

`;




const Icons = styled.div`
    display: flex;
    gap: 10px;
    
`;

const Icon = styled.span`
    margin-left: 10px;
    font-size: 25px;
    cursor: pointer;
`;



const SingleTodo: FC<Props> = ({todo, todos, setTodos}) => {

    const handleEdit = (id: number) => {

        setTodos(
            todos.map((todo) =>
            todo.id === id ? {
                ...todo, isDone: !todo.isDone
            }
                
             : todo
            )
        );

    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <TodoSingle>
            {todo.isDone ? (
                <s className='todo_single--text'>{todo.todo}</s>
            ) : (
                <span className='todo_single--text'>{todo.todo}</span>
            )}
            
            
            <Icons>
            <Icon onClick={()=>handleEdit(todo.id)}><ImPencil2 /></Icon>
            <Icon><FaThumbsUp /></Icon>
            <Icon onClick={()=>handleDelete(todo.id)}><FaThumbsDown /></Icon>
            </Icons>
            
        </TodoSingle>
    );
};

export default SingleTodo;