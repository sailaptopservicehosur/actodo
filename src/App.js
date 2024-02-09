
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";
function App()
{

  const [users,setusers] = useState(
    [
        {
            username:"Abinisha",
            password:"1406"
        }

    ]
)
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Login users={users} setusers={setusers}/>}/>
    <Route path ='/signup' element={<Signup users={users} setusers={setusers}/>}/>
    <Route path ='/landing' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  
  </div>
  )
}


export default App;
