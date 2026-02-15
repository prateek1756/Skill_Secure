import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to signup-page
    navigate("/signup-page");
  }, [navigate]);

  return null;
};

export default Signup;
