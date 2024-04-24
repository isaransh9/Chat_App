const SearchBar = ({setUserName})=>{
    return(
        <div className="relative">
            <input 
                type="text" 
                placeholder="Find a user" 
                className="w-full py-2 px-4 text-gray-700 placeholder-gray-400 bg-purple-100  focus:outline-none"
                onChange={(e)=>{
                    setUserName(e.target.value)
                }}
            />
        </div>
    )
}
export default SearchBar