import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import {  Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import ContaInfo from "../components/ContaInfo/ContaInfo"
import api from "../api"
import { AppContext } from "../components/AppContextProvider/AppContexProvider"

const Conta = () => {

  interface UserData{
    name: string,
    email: string,
    password: string
    balance: number,
    id: string
  }

  const [userData, setUserData] = useState<null | UserData>()
  const valueData = new Date()
  const { id } = useParams()
  const navigate = useNavigate()

  const {isLoggedIn} = useContext(AppContext)

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  })

  
  if(userData && id !== userData.id){
    navigate('/')
  }

  return(
    <SimpleGrid minChildWidth='120px' spacing={10} padding={10}>
      {
        userData?.name === null || userData?.name === undefined ? 
        (
          <Center>
            <Spinner size='xl' color="white"/>
          </Center>
        ) : 
        (
          <>
            <ContaInfo 
            mainContent={`Bem vindo ${userData?.name}`} 
            Content=
            {`${valueData.getDate()}/${valueData.getDay()}/${valueData.getFullYear()}
            ${valueData.getHours()}:${valueData.getMinutes()}`}/>

            <ContaInfo mainContent='Saldo' Content={`${userData.balance}`}/>

            <Button>
              <Link to='/conta/1/infoConta'>Mais Dados</Link>
            </Button>

          </>
        )
      }
    </SimpleGrid>
  )
}

export default Conta