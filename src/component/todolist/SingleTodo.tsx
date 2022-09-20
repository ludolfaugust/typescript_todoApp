import React, { FC } from 'react';
import { Todo } from '../model/model';
import {FaThumbsDown} from "react-icons/fa";
import {ImPencil2} from "react-icons/im";
import {FaThumbsUp} from "react-icons/fa";
import styled from "styled-components";
import {
    Tooltip,
  } from 'react-tippy';
  
  import 'react-tippy/dist/tippy.css';

interface Props {
    todo: string; 
    key: number; 
    todos: Todo[]; 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    title: string;
    
}



const TodoSingle = styled.form`
    display: flex;
    width: 29.5%;
    border-radius: 5px;
    padding: 15px;
    margin-top: 15px;
    background-color: #FFD90F;
    align-items: center;

    @media (max-width: 700px) {
        width: 90%;
        flex-direction: row;
    }

`;

const TodoText = styled.span`
    flex: 1;
    padding: 5px;
    font-size: 20px;
    border: none;

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


const SingleTodo: FC<Props> = ({todo, key, todos, setTodos}) => {
    return (
        <TodoSingle>
            <TodoText>{todo}</TodoText>
            
            <Icons>
            <Tooltip
  title="Edit"
  
  
>
            <Icon><ImPencil2 /></Icon></Tooltip>
            <Icon><FaThumbsUp /></Icon>
            <Icon><FaThumbsDown /></Icon>
            </Icons>
            
        </TodoSingle>
    );
};

export default SingleTodo;