import ChatMenu from "./ChatMenu";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";
import { useState } from "react";
const SideBar = ()=>{
    const [userName,setUserName] = useState("")
    return(
        <div className="w-4/12 rounded-tl-md rounded-bl-md2 bg-white">
            <NavBar/>
            <SearchBar setUserName={setUserName}/>
            <ChatMenu userName={userName}/>
        </div>
    )
}
export default SideBar;