import { } from 'react'

import './App.css'

// import Fetching from "./tutorials/Cosden/1.DataFetchingInReact/index.tsx"
// import KeysAndList from "./tutorials/Cosden/2.KeysAndList/index.tsx"
import ReactQuery from "./tutorials/Cosden/3.ReactQuery/index.tsx"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'




const queryClient = new QueryClient()



function App() {


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQuery />
      </QueryClientProvider>
    </>
  )
}

export default App
