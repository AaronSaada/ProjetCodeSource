import { ChangeEvent, useState } from 'react'
export type HeaderProps = {
    title: string
}

export const Header = ({title}: HeaderProps) => {

    const [name, setName] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName(e.target.value);
    };

    return (
        <header>
            <h1>{`${title}`} <em>{`${name}`}</em></h1>
            <input type="text" value={name} onChange={handleChange}/>
        </header>
    )
}
