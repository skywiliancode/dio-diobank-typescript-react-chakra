import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"

interface Value{
  placeholder: string
  type: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Ipt = ({placeholder, type , value, onChange}: Value) =>{
  return(
    <Input placeholder={placeholder} type={type} size='md' value={value} onChange={onChange}/>
  )
}

export default Ipt