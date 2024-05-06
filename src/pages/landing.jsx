import Header from "../components/header"
import Card from "../components/card"
import TodoContainer from "../components/todocontainer"
import { useLocation } from "react-router-dom"

function Landing() 
{

    const data = useLocation()
    console.log(data.state.user)

    return (<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            {/* {Header} */}
            <Header username={data.state.user}></Header>
            {/* {Card} */}
            <div className="flex justify-between gap-5 my-5 flex-wrap">
                <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                <Card bgcolor={"#FD6663"} title={"December 20"} subtitle={"14:23:00"} />
                <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
            </div>
            {/* {Todo Container} */}
            <TodoContainer />
        </div>
    </div>)
}

export default Landing