import { ChakraProvider } from '@chakra-ui/react'
import Card from './components/Card/Card';

function App() {
  return (
    <ChakraProvider >
      <>
        <Card></Card>
      </>
    </ChakraProvider>
     
  );
}

export default App;
