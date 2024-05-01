import { } from 'react'

import './App.css'

// import Fetching from "./tutorials/Cosden/1.DataFetchingInReact/index.tsx"
// import KeysAndList from "./tutorials/Cosden/2.KeysAndList/index.tsx"
// import ReactQuery from "./tutorials/Cosden/3.ReactQuery/index.tsx"
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import ReduxApp from './tutorials/Cosden/5.Redux/ReduxApp'



 
// const queryClient = new QueryClient()



function App() {


  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <ReduxApp />
      {/* </QueryClientProvider> */}
    </>
  )
}

export default App
