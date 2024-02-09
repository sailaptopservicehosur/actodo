import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props)
{
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate ("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="font-semibold text-3xl"> Hey Hi</h1>
                <p>Sign up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                <input className="border border-black rounded-md p-1 w-52"
                       placeholder="username" 
                       type="text" 
                       onChange={handleUInput}/>

                <input className="border border-black rounded-md p-1 w-52" 
                       placeholder="password" 
                       type="text" 
                       onChange={handlePInput}/>

                <input className="border border-black rounded-md p-1 w-52" 
                       placeholder="confirm password" 
                       type="text" />
                
                <button className="bg-yellow-500 rounded-md w-24 p-1" onClick={addUser}>
                    Sign Up 
                    </button>
                
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Signup