import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const lastPath = localStorage.getItem("lastPath") || "/";

  const onLogin = () => {
    login({
      id: 123,
      name: "Luis Vargas",
    });
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
