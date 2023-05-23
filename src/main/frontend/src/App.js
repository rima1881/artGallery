import Container from "./components/container/Container"
import Footer from "./components/footer/Footer"
import Login from "./components/login/login"
import Navbar from "./components/navbar/Navbar"
import { useState } from "react"
import Signup from "./components/signup/Signup"

function App() {

  const [logingIn , setLoginIn] = useState(false)
  const [SigningUp , setSigningUp] = useState(false)


  return (
    <>
      <Navbar loginBtnHandle={ () => setLoginIn(true)} signupBtnHandle={() => setSigningUp(true)} />
      <Container/>
      <Footer />
      <Login on={logingIn} closeBtnhandle={() => setLoginIn(false)} />
      <Signup on={SigningUp} closeBtnhandle={() => setSigningUp(false)}  />
    </>
  )
}

export default App