import {login} from './login'

describe('Login', () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('Deve exibir um alert com a mensagem de Boas vidas', () => {

    login()
    expect(mockAlert).toHaveBeenCalledWith('Boas vidas')
    
  })
})