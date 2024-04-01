const conta = {
  name: 'Wilian',
  email: 'wilian@gmail.com',
  password: 123456789,
  balance: 2000.00,
  id: '1'
}

const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  },1000)
})

export default api

