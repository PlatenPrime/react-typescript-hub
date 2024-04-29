import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import TodoCard from './TodoCard'
import { addAdapt, addTodo, fetchTodos } from './api'
// import { Todo } from './Todo'

export default function ReactQuery() {

    const queryClient = useQueryClient()

    const [title, setTitle] = React.useState('')
    const [search, setSearch] = React.useState('')

    const { data: todos, isLoading } = useQuery({
        queryKey: ['todos', { search }],
        queryFn: () => fetchTodos(search),
    })


    const { data: adapts, isLoading: isLoading2 } = useQuery({
        queryKey: ['adapts'],
        queryFn: () => fetch("https://btw-server.up.railway.app/api/adapts").then(res => res.json()),

    })

    console.log(adapts);



    const { mutateAsync: addTodoMutation } = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
            // refetch the todos query  
        }

    })


    const { mutateAsync: addAdaptMutation } = useMutation({
        mutationFn: addAdapt,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['adapts'] })
            // refetch the adapts query      
        }

    })




    if (isLoading) {
        return <div>Loading...</div>
    }





    return (




        <div>
            <div
                className="flex gap-3 items-center justify-center"
            >
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-slate-100 px-3 py-2 rounded-md"
                />
                <button
                    onClick={async () => {
                        try {
                            await addAdaptMutation( title )
                            setTitle('')
                        } catch (error) {
                            console.error('Error adding todo:', error)
                        }
                    }}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md"
                >
                    Add Todo
                </button>
            </div>
            {todos?.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
            ))}


            {adapts && adapts.map((adapt) => (
                <div>{adapt.title}</div>
            ))}

        </div>



    )
}
