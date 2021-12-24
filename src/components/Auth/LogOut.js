import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const LogOutContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;
const LogOutButton = styled.button`
  padding: 8px 16px;
  background: #999;
  border: none;
  border-radius: 8px;
`;

function LogOut() {
  const navigate = useNavigate();
  function handleLogOut() {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("login");
      localStorage.removeItem("password");
      navigate("/");
    }
  }
  return (
    <LogOutContainer>
      <LogOutButton onClick={handleLogOut}>Log out</LogOutButton>
    </LogOutContainer>
  );
}

export default LogOut;
