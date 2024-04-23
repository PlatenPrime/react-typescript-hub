import React, { useEffect, useRef } from 'react'
import { useState } from 'react'


const BASE_URL = 'https://jsonplaceholder.typicode.com'

interface Post {
    id: number
    title: string

}








export default function Demo() {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState(0)


    const abortControllerRef = useRef<AbortController | null>(null)

    useEffect(() => {
        const fetchPosts = async () => {

            abortControllerRef.current?.abort()
            abortControllerRef.current = new AbortController()


            setIsLoading(true)
            try {
                const response = await fetch(`${BASE_URL}/posts?page=${page}`,
                    { signal: abortControllerRef.current.signal }
                );
                const posts = (await response.json()) as Post[];
                setPosts(posts)
            } catch (error: any) {
                
                if (error.name === 'AbortError') {
                    console.log('fetch aborted')
                    return;
                }

                setError(error)
            } finally {
                setIsLoading(false)
            }


        }

        fetchPosts()

    }, [page])





    if (error) {
        return <div>Error: Please tyr again</div>
    }



    return (
        <div>
            <h1 className="mb-4 text-2xl " >Data Fetching in React</h1>
            <button
                className="bg-blue-500 text-white px-3 py-2 rounded-md"
                onClick={() => setPage(prev => prev + 1)}
            >
                Next {page + 1}
            </button>



            {isLoading ?

                <div>Loading...</div>
                :
                <ul>
                    {posts?.map(
                        (post) => { return <li key={post.id}>{post.title}</li> }
                    )}
                </ul>
            }



        </div>
    )
}
