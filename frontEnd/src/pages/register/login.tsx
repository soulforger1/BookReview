import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import { Header } from "../../components";
import { Input } from "../../components/input";

const Page = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      const res = await login(email, password);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Input
        label="email"
        className="mb-5"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="password"
        className="mb-5"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={submit}
        className="flex justify-center items-center text-white rounded-md text-sm font-medium w-72 h-10 bg-gray-400 hover:bg-gray-300"
      >
        login
      </button>
      <div className="flex pt-4">
        <p className="mr-2">Don't have account?</p>
        <Link to="/signup" className="text-blue-400 font-semibold">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export const Login = () => {
  return (
    <div className="pt-16 flex justify-center items-center h-screen">
      <Header />
      <Page />
    </div>
  );
};
