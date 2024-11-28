import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  
  return (
    <Button color="inherit" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
