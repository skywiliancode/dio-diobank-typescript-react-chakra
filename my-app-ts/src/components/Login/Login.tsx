import { useState } from "react"
import { 
  Flex,
  Heading, 
  Center 
 } from "@chakra-ui/react"
import Btn from "../Button/Button"
import Ipt from "../Input/Input"
import { login } from "../../services/login"

const Login = ()=>{

  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")

  return(
    <Flex bg={"white"} color={"black"} direction="column" border={"1px solid #000"} gap={4} p={"25px"} borderRadius={"5px"}>
      <Center>
        <Heading size='lg'>Faça Login</Heading>
      </Center>
      <Ipt placeholder="Email" type="Email" value={email} onChange={(evt) => {setEmail(evt.target.value)}}></Ipt>
      <Ipt placeholder="Password" type="Password" value={password} onChange={(evt)=>{setPassword(evt.target.value)}}></Ipt>
      <Btn label="Entrar" bgcolor="#932ED1" onClick={() => login(email, password)}></Btn>
    </Flex>
  )
}

export default Login