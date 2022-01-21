import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-screen h-16 bg-slate-600 flex items-center justify-between px-48 fixed top-0">
      <Link className="text-white" to="/">
        Home
      </Link>
      <Link
        to="/login"
        className="flex justify-center items-center text-white rounded-md text-sm font-medium w-32 h-12 bg-gray-500 hover:bg-gray-400"
      >
        Log-in
      </Link>
    </div>
  );
};
