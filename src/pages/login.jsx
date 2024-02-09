import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate = useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser] = useState(true)
    

    const users = props.users

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function checkuser()
    {
        var userfound = false

        users.forEach(function(item)
        {
            if(item.username === eusername && item.password === epassword)
            {

                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
           
        })
        if (userfound===false)
        {
            console.log("login Failed")
            setRuser(false)
        }
    }
    return (
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="font-semibold text-3xl"> Hey Hi</h1>
            {ruser? <p>I help you manage your activities after you login :)</p>: <p className="text-red-500">Please Signup Before you Login!!!</p>}
            

            <div className="flex flex-col gap-2 my-2">
            <input className="border border-black rounded-md p-1 w-52"
                   placeholder="username" 
                   type="text" 
                   onChange={handleUInput}/>

            <input className="border border-black rounded-md p-1 w-52" 
                   placeholder="password" 
                   type="text" 
                   onChange={handlePInput}/>
            
            <button className="bg-purple-500 rounded-md w-24 p-1 " onClick={checkuser}>
                Login
                </button>
            
                <p>Don't have an account? <Link to={"/signup"} className="underline">Sing up</Link></p>
            </div>
        </div>

    </div>
    )
}

export default Login