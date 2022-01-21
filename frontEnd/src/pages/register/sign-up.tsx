import { Link } from "react-router-dom";
import { Header } from "../../components";
import { Input } from "../../components/input";

const Page = () => {
  return (
    <div>
      <Input label="email" className="mb-5" />
      <Input label="password" className="mb-5" />
      <button className="flex justify-center items-center text-white rounded-md text-sm font-medium w-72 h-10 bg-gray-400 hover:bg-gray-300">
        Create
      </button>
      <div className="flex pt-4">
        <p className="mr-2">Already have account?</p>
        <Link to="/login" className="text-blue-400 font-semibold">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div className="pt-16 flex justify-center items-center h-screen">
      <Header />
      <Page />
    </div>
  );
};
