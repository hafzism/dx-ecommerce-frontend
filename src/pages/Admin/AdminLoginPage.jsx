import LoginForm from "../../components/LoginForm";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const { login, error } = useLogin("/admin/login", "/admin");
  const navigate = useNavigate();

  return (
    <LoginForm
      title="Login (Admin Only)"
      onSubmit={login}
      error={error}
      extraLinks={
        <p className="text-sm text-center text-gray-600">
          User?{" "}
          <span
            className="hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login Here
          </span>
        </p>
      }
    />
  );
};

export default AdminLoginPage;