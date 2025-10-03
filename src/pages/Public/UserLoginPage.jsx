import LoginForm from "../../components/LoginForm";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const UserLoginPage = () => {
  const { login, error } = useLogin("/login", "/home");
  const navigate = useNavigate();

  return (
    <LoginForm
      title="Login"
      onSubmit={login}
      error={error}
      extraLinks={
        <>
          <p className="text-sm text-center text-gray-600">
            Admin?{" "}
            <span
              className="hover:underline cursor-pointer"
              onClick={() => navigate("/admin/login")}
            >
              Login Here
            </span>
          </p>
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
  );
};

export default UserLoginPage;
