import { useState } from 'react'
import { Page } from '../../components/Page/Page'
import { useNavigate } from 'react-router'
import './CreateUsers.css'
import axios from 'axios'

export const CreateUsers = () => {

  const navigate = useNavigate();

  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const [isAdmin, setIsAdmin] = useState()

  return (
    <Page title="Création d'un utilisateur">
        <form 
          className='create-users-form' 
          onSubmit={
            async (e) => {
              e.preventDefault();
              await axios.post("http://localhost:3000/users", {
                login,
                password,
                role: isAdmin ? "admin" : "user"
              });
              navigate("/users");
            }
          }
        >
            <label htmlFor='login'>Login</label>
            <input 
              type='text' 
              placeholder='Entrez votre identifiant' 
              id='login' 
              value={login} 
              onChange={
                e => setLogin(e.target.value)
              }
            />

            <label htmlFor='password'>Password</label>
            <input 
              type='password' 
              placeholder='Entrez votre mot de passe' 
              id='password' 
              value={password} 
              onChange={
                (e) => setPassword(e.target.value)
              }
            />
            <div className='create-users-form-checkbox'>
              <label htmlFor='admin'>Admin</label>
              <input 
                type='checkbox' 
                id='admin' 
                checked={isAdmin} 
                onChange={
                  (e) => setIsAdmin(e.target.value)
                }
              />
            </div>
            

            <button type='submit' value="Submit">Submit</button>
        </form>
    </Page>
  )
}
