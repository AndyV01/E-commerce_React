import React from 'react'
import { useForm } from 'react-hook-form';
import useFetch from "use-http"
import { useHistory, useParams } from 'react-router'
import Button from './Button'

const FormCompra = () => {
    const { id } = useParams()
    const { post, loading } = useFetch(`https://kushteenuy.fly.dev/order/${id}`, {}, [])
    const history = useHistory()
    const location = {
        pathname: '/compraOK',
        pathname2: '/noRegistrado',
        state: { fromDashboard: true }
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        const result = await post("", data)

        if (result.succes === true) {
            history.replace(location.pathname)
        } else {
            history.replace(location.pathname2)
        }
    }
    if (loading) {
        return null
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <input
                {...register('email', { required: true })}
                type="email"
                name="usuario"
                placeholder="mail"
            />
            {errors.email && <p>El correo electrónico es requerido.</p>}

            <input
                {...register('adress', { required: true })}
                type="text"
                name="adress"
                placeholder="adress"
            />
            {errors.adress && <p>La dirección es requerida.</p>}

            <Button description="COMPRAR" />
        </form>
    )
}

export default FormCompra