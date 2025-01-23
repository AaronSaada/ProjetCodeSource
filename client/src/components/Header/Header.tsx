import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router'
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
            <ul>
                <Link to='/'>Accueil</Link>
            </ul>
            <ul>
                <Link to='/test'>Test</Link>
            </ul>
            <ul>
                <Link to='/users'>Users</Link>
            </ul>
            <ul>
                <Link to='/createUsers'>Create Users</Link>
            </ul>
            <h1>{`${title}`} <em>{`${name}`}</em></h1>
            <input type="text" value={name} onChange={handleChange}/>
        </header>
    )
}
