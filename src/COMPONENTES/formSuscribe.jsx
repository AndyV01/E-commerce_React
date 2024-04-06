import React from 'react'
import { useForm } from 'react-hook-form'
import useFetch from "use-http"
import { useHistory } from 'react-router'


const FormSuscribe = () => {
  const history = useHistory()

  const { post, loading } = useFetch(`https://kushteenuy.fly.dev/suscribe`, {}, [])
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const result = await post("", data)
    console.log(result)
    if (result.succes === true) {
      history.replace('/SuscriptoOk')
    }
  }
  if (loading) {
    return null
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input"
        {...register('name', { required: true })}
        type="text"
        placeholder="name"
      />
      {errors.name && <p>El nombre es requerido.</p>}

      <input
        className="input"
        {...register('email', { required: true })}
        type="email"
        placeholder="mail"
      />
      {errors.email && <p>El correo electrónico es requerido.</p>}

      <input
        className="input"
        {...register('password', { required: true })}
        type="password"
        placeholder="password"
      />
      {errors.password && <p>La contraseña es requerida.</p>}

      <button className="button" type='submit'>Enviar</button>
    </form>
  )
}

export default FormSuscribe