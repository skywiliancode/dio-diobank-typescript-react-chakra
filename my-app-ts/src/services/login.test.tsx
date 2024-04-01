import { useContext } from 'react'
import {login} from './login'

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useContext: () => ({
//     setIsLoggedIn: mockSetIsLoggedIn
//   })
// }))

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom') as any,
//   useNavigate: () => mockNavigate

// }))

describe('login', () => {


  const mockEmail = 'wilian@gmail.com'
  const mockPassword = '123456789'

  it('Deve exibir um alert com a mensagem de Boas vidas caso o email seja válido', async () => {

    const response = await login(mockEmail, mockPassword)
    expect(response).toBeTruthy()
  })

  it('Deve exibir um erro caso o email seja inválido', async () => {
    const response = await login('email@invalido.com', 'senhaValida')
    expect(response).toBeFalsy()
  })

  it('Deve exibir um erro caso a senha seja invalida', async () => {
    const response = await login('email@valido.com', '123456')
    expect(response).toBeFalsy()
  })
})