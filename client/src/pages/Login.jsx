import React, { useState, useContext }from 'react'
import { FaEye } from "react-icons/fa6";
import { GiEyelashes } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const[email,setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const[password,setPassword] = useState("")
  const[err, setErr] = useState("")

  // fetch api
  const handleSignIn = async (e)=>{
    e.preventDefault()
    setErr("")
    setLoading(true)
    try {
      let result = await axios.post(`${serverUrl}/api/auth/login`,{
        email, password
      }, {withCredentials:true})
      setUserData(result.data)
      setLoading(false)
      navigate("/home")
    }catch (error) {
      console.log(error)
      setUserData(null)
      setLoading(false)
      setErr(error.response.data.message)
      
    }
    
  }

  return (
    <div className='w-full h-[100vh] bg-cover bg-green-200 flex justify-center items-center'>
      <form className='w-[90%] h-[600px] max-w-[500px] bg-green-300 backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px] rounded-3xl' onSubmit={handleSignIn}>
        <h1 className='text-green-900 text-[30px] font-semibold mb-[30px]'>Sign In to <span className='text-green-500'>Krishna AI</span></h1>

        {/* EMAIL */}
        <input type="email" placeholder='vidyabaviskar@gmail.com' className='w-full h-[60px] outline-none border-2 border-gray-600 bg-transparent text-green-900 placeholder-gray-400 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e)=> setEmail(e.target.value)} value={email} />
        
        {/* PASSWORD */}
        <div className='w-full h-[60px] outline-none border-2 border-gray-600 bg-transparent text-green-900 rounded-full placeholder-gray-400 px-[20px] py-[10px] text-[18px] relative'>
          <input type={showPassword?"text":"password"} placeholder='Password' className='w-full h-full rounded-full outline-none bg-transparent placeholder-gray-400 text-[18px]' required onChange={(e)=> setPassword(e.target.value)} value={password}/>
          {!showPassword && <FaEye className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-green-900 cursor-pointer' onClick={()=>setShowPassword(true)}/>}
          {showPassword && <GiEyelashes className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-green-900 cursor-pointer' onClick={()=>setShowPassword(false)}/>}
        </div>
        

        {err.length>0 && <p className='text-red-500 text-[17px]'>
          *{err}
          </p>}
        {/* BUTTON */}
        <button className='min-w-[150px] h-[60px] mt-[30px] text-white font-semibold bg-green-900 rounded-full text-[19px]' disabled={loading} >{loading?"Loading...":"Sign In"}</button>

        <p className='text-green-900 text-[18px] cursor-pointer' onClick={()=> navigate("/register")}>Want to create a new account?<span className='text-green-500'> Register</span></p>


      </form>
    </div>
  )
}

export default Login