import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import URL from "../constants/urls";
import axios from "axios";

const Dashboard = () => {


  function isTokenExpired(token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      return payload.exp < currentTime;
    } catch {
      return true;
    }
  }
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(location.state?.message || "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate(URL.LOGIN);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = sessionStorage.getItem("accessToken");

      if (!token || isTokenExpired(token)) {
        navigate(URL.LOGIN);
        return;
      }

      try {
        const res = await axios.get("http://127.0.0.1:8000/auth/user/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (err) {
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage("");
        navigate(location.pathname, { replace: true });
      }, 3000);
  
      return () => clearTimeout(timeout);
    }
  }, [message]);

  if (loading) return <p>Loading user info...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome to the Dashboard 🎉
        </h1>
  
        {message && (
          <p className="text-green-600 text-center font-medium">{message}</p>
        )}
  
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">User Info:</h3>
          <p>
            <span className="font-semibold text-gray-600">Username:</span>{" "}
            {user?.username}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Email:</span>{" "}
            {user?.email}
          </p>
        </div>
  
        <button
          onClick={handleLogout}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
        
          Logout
        </button>
      </div>
    </div>
  );
  
};

export default Dashboard;
