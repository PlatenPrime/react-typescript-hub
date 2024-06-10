import { ReactElement, createContext, useState, useEffect } from "react"

export type ArtType = {
    artikul: string
    marker: string
    namerus: string
    nameukr: string
    zone: string
}

const initState: ArtType[] = []


export type UseArtsContextType = { arts: ArtType[] }

const initContextState: UseArtsContextType = { arts: [] }



export const ArtsContext = createContext<UseArtsContextType>(initContextState)


type ChildrenType = {
    children?: ReactElement | ReactElement[]
}



export default function ArtsProvider({ children }: ChildrenType): ReactElement {

    const [arts, setArts] = useState<ArtType[]>(initState)

    useEffect(() => {
        const fetchArts = async (): Promise<ArtType[]> => {
            const data = await fetch('https://btw-server.up.railway.app/api/arts')
                .then(res => res.json())
                .catch(err => { if (err instanceof Error) console.log(err) })
            return data
        }

        fetchArts().then(arts => setArts(arts))

    }, [])


    return (
        <ArtsContext.Provider value={{ arts }}>
            {children}
        </ArtsContext.Provider>
    )
}   