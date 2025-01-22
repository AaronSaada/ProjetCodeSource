import { ChangeEvent, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

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
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>{title}</h1>
            <input type="text" value={name} onChange={handleChange}/>
            <p>Bonjour {name}</p>
        </>
    )
}
