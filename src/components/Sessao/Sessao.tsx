import { Container } from "./style";
import { useForm } from "react-hook-form";


export function Sessao(){

    const { register, handleSubmit } = useForm();
    const onSubmit = (d :any) => alert(JSON.stringify(d))

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Iniciar Sessão</label>
                <input placeholder="Escreva seu email" id='email' {...register('email', { pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i })} />
                <input type="password" placeholder="Escreva sua senha" />
                <input type="submit" value={'Enviar'}/>
            </form>
        </Container>
    )
}