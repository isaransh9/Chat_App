const Message = ({message})=>{
    return(
       <div className="flex items-center m-2">
            <div className="bg-white rounded-tl-md rounded-br-md p-2 ml-4">
                <p>{message}</p>
            </div>
        </div>
    )
}
export default Message;