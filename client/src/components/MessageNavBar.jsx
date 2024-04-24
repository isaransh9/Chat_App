import threeDots from "../assets/three_dots.png"
import videoCall from "../assets/video_call.png"
const MessageNavBar = ()=>{
    const userData = localStorage.getItem("userData")
    return(
        <div className="flex justify-between items-center  bg-purple-500 text-white h-[10%]">
            <h1 className="pl-4">{userData?.data?.User?.fullName}</h1>
            <div className="flex items-center">
                <img src={videoCall} alt="video-call" className="w-8 h-8 pr-2"/>
                <img src={threeDots} alt="settings-dot" className="w-8 h-8 pr-2"/>
            </div>
        </div>
    )
}
export default MessageNavBar