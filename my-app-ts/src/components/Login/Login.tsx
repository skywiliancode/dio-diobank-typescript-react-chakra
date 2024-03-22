import { 
  Flex,
  Heading 
 } from "@chakra-ui/react"
import Btn from "../Button/Button"
import Ipt from "../Input/Input"


const Login = ()=>{
  return(
    <Flex bg={"white"} color={"black"} direction="column" border={"1px solid #000"} gap={4} p={"10px"} borderRadius={"5px"}>
      <Heading size='md'>Faça Login</Heading>
      <Ipt placeholder="Email" type="Email"></Ipt>
      <Ipt placeholder="Password" type="Password"></Ipt>
      <Btn label="Entrar"></Btn>
    </Flex>
  )
}

export default Login