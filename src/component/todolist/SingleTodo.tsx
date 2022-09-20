import React, { FC } from 'react';
import { Todo } from '../model/model';
import {FaThumbsDown} from "react-icons/fa";
import {ImPencil2} from "react-icons/im";
import {FaThumbsUp} from "react-icons/fa";
import styled from "styled-components";


interface Props {
    todo: string; 
    key: number; 
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

`;

const TodoText = styled.span`

flex: 1;
padding: 5px;

`;


const Icons = styled.div`

`;

const Icon = styled.span`


`;


const SingleTodo: FC<Props> = ({todo, key, todos, setTodos}) => {
    return (
        <TodoSingle>
            <TodoText>{todo}</TodoText>
            
            <Icons>
            <Icon><ImPencil2 /></Icon>
            <Icon><FaThumbsUp /></Icon>
            <Icon><FaThumbsDown /></Icon>
            </Icons>
            
        </TodoSingle>
    );
};

export default SingleTodo;