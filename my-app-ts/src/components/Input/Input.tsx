import { Input } from "@chakra-ui/react"

interface Value{
  placeholder: string
  type: string
}

const Ipt = ({placeholder, type}: Value) =>{
  return(
    <Input placeholder={placeholder} type={type} size='md'/>
  )
}

export default Ipt