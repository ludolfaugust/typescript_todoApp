import React, {FC, useRef} from 'react';
import styled from "styled-components"


const Form = styled.form`
    display: flex;
    width: 90%;
    position: relative;
    align-items: center;
    `
  ;


const Input = styled.input`
    width: 100%;
    border-radius: 10px;
    padding: 20px 30px;
    font-size: 25px;
    border: none;
    transition: 0.2s;
    box-shadow: inset 0 0 3px black; 
   

        &:focus{
          box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.2);
          outline: blue;  
          
        }

`;


const Button = styled.button`
    position: absolute; 
    widht: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 10px;
    right: 0px;
    border: none;
    font-size: 15px;
    background-color: #1d7ed4;
    color: white;
    transition: 0.2s all;
   

    &: hover {
        background: #195eca;
    }

    &: focus {
        transform: scale(0.9);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    }
`;



interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}





const InputField:FC<Props> = ({todo, setTodo, handleAdd}) => {
    
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <Form onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
        }}>
            <Input type="input" 
            ref={inputRef}
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            placeholder= "Enter a Todo"/>

            <Button type="submit">
                Go
            </Button>
            
        </Form>
    );
};

export default InputField;