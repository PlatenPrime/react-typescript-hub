import { ReactNode } from 'react'


interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode

}





export default function List<T,>(
    {
        items, render
    }: ListProps<T>
) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{render(item)}</li>
            ))}
        </ul>
    )
}
