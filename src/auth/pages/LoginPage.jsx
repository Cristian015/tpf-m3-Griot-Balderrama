import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';




export const LoginPage = () => {


  //const { setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate();

  const { login } = useContext( AuthContext );

  

  const { register, handleSubmit, formState:{ errors } } = useForm();

  const onSubmit = (data) => {
    console.log("data ",data);
    localStorage.setItem('currentUser', JSON.stringify(data))
    //setCurrentUser(data)
    login(data.usuario);
    console.log("usuario ingresado ", data.usuario);
    navigate('/',{
      replace: true
    })
  }

 
   return (
    <>
       <div className="sign-in-container">
      <span>Login</span>
      <form className="sign-in-form" onSubmit={ handleSubmit(onSubmit)}>
        <input 
          className="input-form"
          type="text"
          placeholder="Usuario"
          {
            ...register('usuario',{ required: '* Usuario es requerido'})
          }
        />
        <p>{ errors.usuario?.message }</p>
        <input 
          className="input-form"
          type="password"
          placeholder="Password"
          {
            ...register('password',{ required: '* Password es requerido'})
          }
        />
        <p>{ errors.password?.message }</p>

        <button 
        className="btn btn-primary"
        type="submit"
        >
        Login
      </button>

      </form>
     </div>
    </>
   )
     

}
