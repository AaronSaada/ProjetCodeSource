import { Link } from 'react-router'
export type HeaderProps = {
    title: string
}

export const Header = ({title}: HeaderProps) => {

    return (
        <header className='bg-amber-600'>
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
        </header>
    )
}
