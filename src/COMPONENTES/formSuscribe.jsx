import React from 'react'
import useFetch from "use-http"
import { useHistory } from 'react-router'


const FormSuscribe = () => {
  const history = useHistory()
  const location = {
    pathname: '/SuscriptoOk',
    state: { fromDashboard: true }
  }

    const { post, loading } = useFetch(`http://localhost:4000/suscribe`, {}, [])
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        const params = {
          name,
          email,
          password
        }
         post("", params)
         const result = await post("", params)

          console.log(result)
        if(result.succes === true){
          history.replace(location.pathname)
        } 
        } 
        if (loading){
          return null
      }  
        
    return(
    <form onSubmit={handleSubmit}>
    <input className="input" required="true" type="text" value={name} onChange={(e) => setName(e.target.value) } name="name" placeholder="name"/>
    <input className="input" required="true" type="email" value={email} onChange={(e) => setEmail(e.target.value) } name="email" placeholder="mail"/>
    <input className="input" required="true" type="password" value={password} onChange={(e) => setPassword(e.target.value) } name="password" placeholder="password"/>
    <button className="button">Enviar</button>
</form>
   )
}

export default FormSuscribe