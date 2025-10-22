import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/NavbarAdmin";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const UserLoginPage = () => {
  const { login, error } = useLogin("/login", "/");
  const navigate = useNavigate();

  return (
    <div>
    <Navbar></Navbar>
    <LoginForm
      title="Welcome Back to LitBay!"
      onSubmit={login}
      error={error}
      extraLinks={
        <>
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <span
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </>
      }
    />
    </div>
  );
};

export default UserLoginPage;
