import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login-page
    navigate("/login-page");
  }, [navigate]);

  return null;
};

export default Login;
