import axios from 'axios'
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
import { Page } from '../../components/Page/Page'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import './CreateUsers.css'

type UserForm = {
  login: string;
  password: string;
  isAdmin: boolean;
}

const userFormSchema = Joi.object<UserForm>({
  login: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export const CreateUsers = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserForm>({
    resolver: joiResolver(userFormSchema)
  });

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
              {errors.login && <span>{errors.login.message}</span>}
          </div>
            
          <div className='create-users-form-password'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password' 
              placeholder='Entrez votre mot de passe' 
              id='password'
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
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
