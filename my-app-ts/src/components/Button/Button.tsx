import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface Label{
  label: string
  bgcolor: string
  onClick: MouseEventHandler
}


const Btn = ({label, bgcolor, onClick}: Label) => {
  return(
    <Button onClick={onClick} _hover={{
      background: bgcolor,
      color: "white",
      opacity: "0.9"
    }} color={"white"} bg={bgcolor}>{label}</Button>
  )
}

export default Btn