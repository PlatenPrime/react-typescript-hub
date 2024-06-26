import  { ReactNode } from 'react'


type SectionProps = {
    title?: string
    children: ReactNode
}


export default function Section({ title = 'My Subheading', children }: SectionProps) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}
