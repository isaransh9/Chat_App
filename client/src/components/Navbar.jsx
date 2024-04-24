import {useNavigate } from "react-router-dom"
import { useContext } from "react";
import { Socketcontext } from "../context/SocketContext";
const NavBar = ()=>{
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    const {socket} = useContext(Socketcontext)

    // console.log(userData)
    const navigate = useNavigate();
    const handleClick = ()=>{
        // localStorage.removeItem("userData");
        localStorage.clear()
        socket.off('newMessage');
        socket.disconnect();
        navigate('/')
    }
    return(
        <div className="px-1 flex justify-between items-center text-sm rounded-tl-md bg-purple-700 text-white h-[10%]">
            <div className="font-bold">Hello Chat</div>
            <div className="flex items-center gap-1">
                <p>{userData?.data?.User?.fullName}</p>
                <button className="shadow-lg px-2 py-1 bg-blue-300"
                onClick={handleClick}
                aria-label="Logout"
                >Logout</button>
            </div>
        </div>
    )
}
export default NavBar