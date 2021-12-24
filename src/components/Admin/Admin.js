import React from "react";
import { useNavigate } from "react-router";
import LogOut from "../Auth/LogOut";

function Admin() {
  const navigate = useNavigate();
  return (
    <div>
      {localStorage.getItem("isAdmin") === "false" ? (
        navigate("/home")
      ) : (
        <div>
          <LogOut />
          <h1>
            Admin page
            asdfasdjfklasdhflkjasdlkfjaklsdjfklsjdfjsakldjflsajfkasdfasdjfklasdhflkjasdlkfjaklsdjfklsjdfjsakldjflsajfkasdfasdjfklasdhflkjasdlkfjaklsdjfklsjdfjsakldjflsajfkasdfasdjfklasdhflkjasdlkfjaklsdjfklsjdfjsakldjflsajfk{" "}
          </h1>
        </div>
      )}
    </div>
  );
}

export default Admin;
