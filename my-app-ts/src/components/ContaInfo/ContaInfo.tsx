import { Box, Text } from "@chakra-ui/react"

interface ContaInfo{
  mainContent: string
  Content: string
}

const ContaInfo = ({mainContent, Content}: ContaInfo) => {
  return(
    <Box backgroundColor={"white"} padding="25px" borderRadius={10}>
      <Text fontSize='2xl' fontWeight='bold'>
        {mainContent}
      </Text>
      <Text fontSize='xl' fontWeight='bold'>
        {Content}
      </Text>
    </Box>
  )
}

export default ContaInfo