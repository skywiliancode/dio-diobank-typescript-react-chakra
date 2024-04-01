import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import {AppContextProvider} from './components/AppContextProvider/AppContexProvider';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';


function App() {

  !getAllLocalStorage() && createLocalStorage()


  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppContextProvider>
          <Layout>
          <MainRoutes />
          </Layout>
        </AppContextProvider>
      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
