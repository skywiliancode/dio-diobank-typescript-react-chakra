import { useState, useContext } from "react"
import { Center, Flex, Heading } from "@chakra-ui/react"
import Card from "../components/Card/Card"
import Ipt from "../components/Input/Input"
import Btn from "../components/Button/Button"
import { login } from "../services/login"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContextProvider/AppContexProvider"
import { changeLocalStorage } from "../services/storage"

const Home = () => {

  const [ email, setEmail] = useState<string>("")
  const [ password, setPassword] = useState("")
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateuser = async (email: string) => {
    const loggedIn = await login(email, password)

    if(!loggedIn){
      return alert("Usuário ou senha inválidos")
    }

    changeLocalStorage({login: true})
    setIsLoggedIn(true)
    navigate('/conta/1')
  }

  return(
    <Card>
      <Flex bg={"white"} color={"black"} direction="column" border={"1px solid #000"} gap={4} p={"25px"} borderRadius={"5px"}>
        <Center>
          <Heading size='lg'>Faça Login</Heading>
        </Center>
        <Ipt placeholder="Email" type="Email" value={email} onChange={(evt) => {setEmail(evt.target.value)}}></Ipt>
        <Ipt placeholder="Password" type="Password" value={password} onChange={(evt)=>{setPassword(evt.target.value)}}></Ipt>
        <Btn label="Entrar" bgcolor="#932ED1" onClick={() => validateuser(email)}></Btn>
      </Flex>
    </Card>
  )
}

export default Home