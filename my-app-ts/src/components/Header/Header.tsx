import { 
  Image,
  Center 
} from '@chakra-ui/react'

import source from "./logo-dio-bank.png";


const Header = ()=>{
  return(
    <div>
      <Center>
        <Image src={source} w={"100px"} alt='Dan Abramov' />
      </Center>
    </div>
  )
}

export default Header