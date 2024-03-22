import { Button } from "@chakra-ui/react"
import { login } from "../../services/login"

interface Label{
  label: string
}

const Btn = ({label}: Label) => {
  return(
    <Button onClick={login} _hover={{
      background: "#932ED1",
      color: "white",
      opacity: "0.9"
    }} color={"white"} bg={"#932ED1"}>{label}</Button>
  )
}

export default Btn