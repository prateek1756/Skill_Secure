import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PostInternship = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to company dashboard
    navigate("/company-dashboard");
  }, [navigate]);

  return null;
};

export default PostInternship;
