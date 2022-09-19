import React, { FC } from 'react';
import  styled  from 'styled-components';
import { Todo } from '../model/model';


interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoContainer = styled.div``;


const TodoList:FC<Props> = ({todos, setTodos}) => {
    return (
        <TodoContainer>
            
        </TodoContainer>
    );
};

export default TodoList;