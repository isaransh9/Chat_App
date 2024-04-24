import { signupAPI } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import Add from "../assets/img/add.png"

const Signup = ()=>{
    const navigate = useNavigate(); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        if(isLoggedIn) navigate('/home');
    },[isLoggedIn])
    const handleSubmit =async (e)=>{
        e.preventDefault()
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const data = {
            fullName,
            email,
            password
        };
        console.log(data)
        try {
            const response = await fetch(signupAPI, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
        
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }else{
                const responseData = await response.json();
                // Store the token in local storage
                localStorage.setItem('token', responseData.data.accessToken);
                localStorage.setItem('userData', JSON.stringify(responseData));
                setIsLoggedIn(true); 
            }
          } 
          catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    return(
        <div className="bg-blue-400 flex justify-center items-center h-screen">
                <div className="bg-white text-center p-4 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Hello Chat</h1>
                    <div className="mb-4">Register </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input type="text" placeholder="display name" className="w-full py-2 px-4 border rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <input type="text" placeholder="Email" className="w-full py-2 px-4 border rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Password" className="w-full py-2 px-4 border rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fileInput" 
                                className="flex justify-center border border-gray-300 rounded p-4 hover:border-blue-500
                                cursor-pointer">
                                <img src={Add} alt="default profile" className="mr-8 w-8 h-8"/>
                                <span className="text-gray-400">Upload Image</span>
                            </label>
                            <input type="file" id="fileInput" className="hidden" accept=".jpg, .jpeg, .png"/>
                        </div> 
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-700 transition duration-300">
                            Sign Up
                        </button>
                    </form>
                    <p className="text-sm">Already have an account? <Link to=".././Login" className="text-blue-600 cursor-pointer">Login</Link></p>
                </div>
        </div>
    ) 
}
export default Signup