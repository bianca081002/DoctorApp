import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || false
  );

  // Fetch Doctors Data
  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load doctors data");
    }
  };

  // Fetch User Profile
  const loadUserProfileData = async () => {
    if (!token) return;
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.userData);
        localStorage.setItem("userData", JSON.stringify(data.userData));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load user profile");
      handleLogout(); // Logout if token is invalid or expired
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setToken("");
    setUserData(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    toast.success("Logged out successfully");
  };

  // Context Value
  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    handleLogout,
  };

  // Fetch Doctors Data on Mount
  useEffect(() => {
    getDoctorsData();
  }, []);

  // Fetch User Profile When Token Changes
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
