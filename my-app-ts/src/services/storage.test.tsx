import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
  login: false
}

describe('storage', () => {

  const mockSetItem = jest.spyOn(Storage.prototype,'setItem')
  
  it('Deve retorna o objeto com a chave diobank', () => {

    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')

    getAllLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith('diobank')
  })

  it('Deve criar um objeto no storage', () => {

    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))

  })

  it('Deve alterar o objeto no local storage', () => {
    changeLocalStorage(dioBank)
    expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))

  })
})