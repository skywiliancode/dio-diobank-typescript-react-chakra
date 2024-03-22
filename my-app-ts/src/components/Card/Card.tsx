import { Container, Box } from "@chakra-ui/react"
import Header from "../Header/Header"
import Login from "../Login/Login"

const Card = ()=>{
  return(
    <Box h={"100vh"} bgGradient={"linear(0deg, rgba(9,8,40,1) 15%, rgba(44,20,61,1) 45%, rgba(24,7,45,1) 72%)"}>
      <Container>
        <Header></Header>
        <Login></Login>
      </Container>
    </Box>
  )
}

export default Card