import Header from "../component/Header";
import Card from "../component/Card";
import TodoContainer from "../component/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing()
{
    const data = useLocation()
    console.log(data.state.user)
    return(
        <div className="bg-black p-16">
      <div className="bg-slate-50 p-10 border rounded-md">
        <Header username={data.state.user} />
        <div className="flex justify-between gap-6 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"30"} subtitle={"Hosur"} />
          <Card bgcolor={"#FD6663"} title={"02:13:14"} subtitle={"February"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />

        </div>
       <TodoContainer/>
      </div>
 
    </div>
    )
}

export default Landing