import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Sidebar from "../components/Sidebar"

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if user is not authenticated
  React.useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const discussions = [
    { id: 1, user: "Ram", content: "माझ्या गव्हाच्या पिकावर कीड आली आहे, उपाय सांगा." },
    { id: 2, user: "Ravi", content: "ನಾನು ಟೊಮಾಟೋ ಬೆಳೆದಿದ್ದೇನೆ, ಮಾರುಕಟ್ಟೆಯ ಬೆಲೆ ಏನು?" },
  ];

  const translateText = (text) => `TRANSLATED: ${text}`;
  const moderate = (text) =>
    text.includes("कीड") ? "⚠️ Pest issue detected" : "✅ Safe";

  return (
    
    <div className="min-h-screen bg-white p-6">
      <Sidebar />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">Farmer Discussion Forum</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="space-y-4">
        {discussions.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow-sm">
            <h3 className="font-semibold">{post.user}</h3>
            <p className="text-gray-700">{post.content}</p>
            <p className="text-sm text-green-600 mt-2">{translateText(post.content)}</p>
            <p className="text-sm text-red-500">Moderation: {moderate(post.content)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
