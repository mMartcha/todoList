import { createContext, ReactNode, useState } from "react"


export type TodoProps ={
    id: string
    todoText: string
    isChecked: boolean
}

type TodoContextProps ={
    todoList: TodoProps[]
    setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>
    todoItem: string
    setTodoItem: React.Dispatch<React.SetStateAction<string>>
    isChecked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

type TodoConxtextProviderProps ={
    children: ReactNode
}

export const TodoContext = createContext({} as TodoContextProps)

export function TodoConxtextProvider({children}: TodoConxtextProviderProps){

    const [todoList, setTodoList] = useState<TodoProps[]>([])
    const [todoItem, setTodoItem] = useState('')
    const [isChecked, setIsChecked] = useState(Boolean)

    return(
        <TodoContext.Provider value={{
            todoList, setTodoList,
            todoItem, setTodoItem,
            isChecked, setIsChecked
        }}>
            {children}
        </TodoContext.Provider>
    )
}





