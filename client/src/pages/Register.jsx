import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { GiEyelashes } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  // 🔐 Email/Password Registration
  const handleSignUp = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Registered:", result.user);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setErr(error.message);
      console.error("Firebase error:", error);
    }
  };

  // 🔐 Google Auth
  const handleGoogleSignUp = async () => {
    setErr("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Login:", result.user);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setErr(error.message);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-cover bg-white flex justify-center items-center">
      <form
        className="w-[90%] h-[600px] max-w-[500px] bg-green-200 backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px] rounded-3xl"
        onSubmit={handleSignUp}
      >
        <h1 className="text-green-900 text-[30px] font-semibold mb-[30px]">
          Register to <span className="text-green-500">Krishi AI</span>
        </h1>

        {/* NAME */}
        <input
          type="text"
          placeholder="eg. Vidya Baviskar"
          className="w-full h-[60px] outline-none border-2 border-gray-600 bg-transparent text-green-900 placeholder-gray-400 px-[20px] py-[10px] rounded-full text-[18px]"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="vidyabaviskar@gmail.com"
          className="w-full h-[60px] outline-none border-2 border-gray-600 bg-transparent text-green-900 placeholder-gray-400 px-[20px] py-[10px] rounded-full text-[18px]"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        {/* PASSWORD */}
        <div className="w-full h-[60px] outline-none border-2 border-gray-600 bg-transparent text-green-900 rounded-full placeholder-gray-400 px-[20px] py-[10px] text-[18px] relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full h-full rounded-full outline-none bg-transparent placeholder-gray-400 text-[18px]"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!showPassword && (
            <FaEye
              className="absolute top-[18px] right-[20px] w-[25px] h-[25px] text-green-900 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
          {showPassword && (
            <GiEyelashes
              className="absolute top-[18px] right-[20px] w-[25px] h-[25px] text-green-900 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          )}
        </div>

        {/* Error */}
        {err.length > 0 && <p className="text-red-500 text-[17px]">*{err}</p>}

        {/* Submit Button */}
        <button
          className="min-w-[150px] h-[60px] mt-[10px] text-white font-semibold bg-green-900 rounded-full text-[19px] hover:bg-green-100 hover:text-green-900 transition-all flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>

        {/* Google Sign-in */}
        <button
          type="button"
          className="min-w-[150px] h-[60px] mt-[10px] text-white font-semibold bg-green-900 rounded-full text-[19px] hover:bg-green-100 hover:text-green-900 transition-all flex items-center justify-center gap-2"
          onClick={handleGoogleSignUp}
        >
          <FcGoogle className="text-[24px]" />
          Google
        </button>

        {/* Redirect to Login */}
        <p
          className="text-green-900 text-[18px] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Already have an account?<span className="text-green-500"> Login</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
