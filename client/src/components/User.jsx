import johncena from "../assets/johncena.jpeg"
import { useContext, useEffect } from "react"
import MessageContex from "../context/MessageContext"
import { Socketcontext } from "../context/SocketContext"
import { getOneUserConversation } from "../utils/constants"
const User = ({fullname,id})=>{
    const {setMessages} = useContext(MessageContex)
    const {currentFriendId,setCurrentFriendId,setUnreadMessages} = useContext(Socketcontext)

    // console.log(currentFriendId)
    const handleClick =()=>{
        if(currentFriendId === id) return;
        const caller = async ()=>{
            try {
                const accessToken = localStorage.getItem("token")
                const response = await fetch(getOneUserConversation+id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':`Bearer ${accessToken}`
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    const responseData = await response.json();
                    setMessages(responseData.data)
                    setCurrentFriendId(id)
                    setUnreadMessages(prevUnreadMessages => {
                        return prevUnreadMessages.filter(userId => userId !== id);
                    });
                }
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        }
        caller()
    }
    return(
        <div className="shadow-md flex-col h-18 hover:bg-gray-200 transition duration-300 ease-in-out transform"
        onClick={handleClick}>
            <div className="flex items-center p-2">
                <img src={johncena} alt="profile pic" className="w-8 h-8 rounded"/>
                <p className="px-4">{fullname}</p>
            </div>
            <p className="pl-4">Latest Message</p>
        </div>
    )
}
const highlightUser = (WrappedComponent) => {
    // Returns a component
    return ({fullname,id}) => {
        return (
            <div className="border border-blue-500 rounded p-2">
                <WrappedComponent fullname={fullname} id={id} />
            </div>
        );
    };
};
export {highlightUser}
export default User