import { Container } from "./style";
import { useForm } from "react-hook-form";

export function Sessao() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => alert("Logado com sucesso!");

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Iniciar Sessão</label>
        <input
          style={
            errors.email
              ? {
                  animation: 'shake .3s',
                }
              : {}
          }
          placeholder="Escreva seu email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i,
          })}
        />
        <input
          type="password"
          placeholder="Escreva sua senha"
          {...register("senha", { required: true })}
        />
        <input type="submit" value={"Enviar"} />
      </form>
    </Container>
  );
}
