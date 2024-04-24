import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import TodoCard from './TodoCard'
import { addTodo, fetchTodos } from './api'
import { Todo } from './Todo'

export default function ReactQuery() {

    const { data: todos, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: () => fetchTodos(),
    })


    const { mutateAsync: addTodoMutation } = useMutation({
        mutationFn: addTodo,

    })



    if (isLoading) {
        return <div>Loading...</div>
    }





    return (




        <div>
            {todos?.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
            ))}

        </div>



    )
}
