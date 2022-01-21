import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/auth-provider";

const Leftbar = () => {
  const { token } = useContext(AuthContext);

  if (!token)
    return (
      <Link
        to="/login"
        className="flex justify-center items-center text-white rounded-md text-sm font-medium w-32 h-12 bg-gray-500 hover:bg-gray-400"
      >
        Log-in
      </Link>
    );

  return (
    <Link
      to="/admin"
      className="flex justify-center items-center text-white rounded-md text-sm font-medium w-32 h-12 bg-gray-500 hover:bg-gray-400"
    >
      Admin
    </Link>
  );
};

export const Header = () => {
  return (
    <div className="w-screen h-16 bg-slate-600 flex items-center justify-between px-48 fixed top-0">
      <Link className="text-white" to="/">
        Home
      </Link>
      <Leftbar />
    </div>
  );
};
