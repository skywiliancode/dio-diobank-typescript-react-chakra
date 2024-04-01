import { useEffect, useState } from "react"
import ContaInfo from "../components/ContaInfo/ContaInfo"
import api from "../api"
import { Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Dados = () => {

  interface UserData{
    name: string,
    email: string,
  }

  const [ userData, setUserData ] = useState<null|UserData>()

  useEffect(() => {
    const getUserData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getUserData()
  }, [])

  return(
    <SimpleGrid minChildWidth='120px' spacing={10} padding={10}>
      {
        userData?.name === null || userData?.email === undefined ? 
        (
          <Center>
            <Spinner size='xl' color="white"/>
          </Center>
        ) :
        (
          <>
            <ContaInfo mainContent="Nome" Content={`${userData?.name}`}/>
            <ContaInfo mainContent="Email" Content={`${userData?.email}`}/>

            <Button>
              <Link to='/conta/1'>Conta</Link>
            </Button>
          </>
        )
      }
    </SimpleGrid>
  )
}

export default Dados