import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { useContext } from "react";
import { AppContext } from "./components/AppContextProvider/AppContexProvider";
import Dados from "./pages/Dados";

const MainRoutes = () => {

  const {isLoggedIn} = useContext(AppContext)

  return(
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/conta/:id' element = {[isLoggedIn ? (<Conta />) : <Home />]}/>
      <Route path='/conta/:id/infoConta' element = {[isLoggedIn ? (<Dados />) : <Home />]}/>
    </Routes>
  )
}

export default MainRoutes;