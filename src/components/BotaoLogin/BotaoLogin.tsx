import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

const BotaoLogin = () => {
  return (
    <Container>
        <Link to='/Login'>
            <button>Login</button>
        </Link>
    </Container>
  )
}

export default BotaoLogin