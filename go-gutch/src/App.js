import { Navbar } from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import { Home } from "./pages/home"
import { LogIn } from "./components/Login"
import { SignUp } from "./components/Signup"
import { Footer } from "./components/Footer"

function App() {  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
