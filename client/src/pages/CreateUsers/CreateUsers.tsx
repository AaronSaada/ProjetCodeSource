import { Page } from '../../components/Page/Page'
import { useNavigate } from 'react-router'
import './CreateUsers.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'

type UserForm = {
  login: string;
  password: string;
  isAdmin: boolean;
}

export const CreateUsers = () => {

  const {
    register,
    handleSubmit
  } = useForm<UserForm>();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async ({ isAdmin, login, password}) => {
    await axios.post("http://localhost:3000/users", {
      login,
      password,
      role: isAdmin ? "admin" : "user"
    });
    navigate("/users");
  })

  return (
    <Page title="Création d'un utilisateur">
        <form 
          className='create-users-form' 
          onSubmit={onSubmit}
        >
          <div className='create-users-form-login'>
            <label htmlFor='login'>Login</label>
              <input 
                type='text' 
                placeholder='Entrez votre identifiant' 
                id='login'
                {...register("login")}
              />
          </div>
            
          <div className='create-users-form-password'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password' 
              placeholder='Entrez votre mot de passe' 
              id='password'
              {...register("password")}
            />
          </div>

          <div className='create-users-form-checkbox'>
            <label htmlFor='admin'>Admin</label>
            <input 
              type='checkbox' 
              id='admin' 
              {...register("isAdmin")}
            />
          </div>
          

          <button type='submit' value="Submit">Submit</button>
        </form>
    </Page>
  )
}
