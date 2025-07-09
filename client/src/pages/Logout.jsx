// src/pages/Logout.jsx
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  }, [navigate]);

  return <p className="text-center mt-10">Logging out...</p>;
}

export default Logout;
