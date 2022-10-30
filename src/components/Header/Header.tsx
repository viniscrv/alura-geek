import { Link } from "react-router-dom";
import logoImg from "../../assets/img/Logo.svg";
import iconeLupa from "../../assets/img/Lupa.png";
import { Container } from "./style";
import BotaoLogin from "../BotaoLogin/BotaoLogin";
import { useState } from "react";

Header.defaultProps = {
  login: null,
};
export function Header(props: { login: string }) {
  return (
    <Container>
      <div className="pesquisar">
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
        <div>
          <input
            type="text"
            placeholder="O que deseja encontrar?"
          />
        </div>
      </div>
      <div>{props.login == "login" ? <BotaoLogin /> : ""}</div>
      <img src={iconeLupa} className="lupa" alt="Lupa" />
    </Container>
  );
}
