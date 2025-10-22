import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/NavbarAdmin";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const { login, error } = useLogin("/admin/login", "/admin");
  const navigate = useNavigate();

  return (
    <>
    <Navbar></Navbar>
    <LoginForm
      title="Welcome,Admin"
      onSubmit={login}
      error={error}
      extraLinks={""}
      />
      </>

  );
};

export default AdminLoginPage;