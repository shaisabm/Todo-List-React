import {useEffect, useState} from "react";


export default function TodoInput(props) {
    const {handleAddTodos, setTodoValue, todoValue} = props

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Enter') {
                handleAddTodos(todoValue)
                setTodoValue('')

            }
        }
        document.body.addEventListener("keydown", keyDownHandler)
        return () => {
            document.body.removeEventListener('keydown', keyDownHandler)
        }

    }, [todoValue, handleAddTodos])

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder={'Enter todo...'}/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')

            }}>Add
            </button>
        </header>
    )


}