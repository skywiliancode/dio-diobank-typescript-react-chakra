import {
  Flex, 
  Image,
  Button,
  Spacer,
  Box,
} from '@chakra-ui/react'

import source from "./logo-dio-bank.png";
import { useContext } from 'react';
import { AppContext } from '../AppContextProvider/AppContexProvider';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';

const Header = ()=>{

  const { isLoggedIn ,setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()


  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return(
    <Flex bg={'purple'} alignItems='Center' marginBottom= '10'>
      <Box>
          <Image src={source} w={"100px"} alt='Dan Abramov' />
      </Box>
      <Spacer />

      {
        isLoggedIn && (
          <Button marginRight='5' onClick={() => logout()}>
            Sair
          </Button>
        )
      }
      
    </Flex>
  )
}

export default Header