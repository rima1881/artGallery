import Container from "./components/container/Container"
import Footer from "./components/footer/Footer"
import Login from "./components/login/login"
import Navbar from "./components/navbar/Navbar"
import { useState } from "react"

function App() {

  const [logingIn , setLoginIn] = useState(false)
  const [ pageState , setPageState] = useState(0)


  return (
    <>
      <Navbar loginBtnHandle={ () => setLoginIn(true)} pageStateHandle={ (state) => setPageState(state)} />
      <Container state={pageState} />
      <Footer />
      <Login on={logingIn} closeBtnhandle={() => setLoginIn(false)} />
    </>
  )
}

export default App