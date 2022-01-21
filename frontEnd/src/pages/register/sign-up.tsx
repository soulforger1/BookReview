import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import { Header } from "../../components";
import { Input } from "../../components/input";

type FieldsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
};

const Page = () => {
  const [fields, setFields] = useState<FieldsType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async () => {
    if (fields.password !== fields.rePassword) {
      alert("password does not match");
    } else {
      try {
        const res = await signup(
          fields.email,
          fields.password,
          fields.firstName,
          fields.lastName
        );

        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <Input
        label="FirstName"
        className="mb-5"
        onChange={(e) =>
          setFields((fields) => ({ ...fields, firstName: e.target.value }))
        }
      />
      <Input
        label="LastName"
        className="mb-5"
        onChange={(e) =>
          setFields((fields) => ({ ...fields, lastName: e.target.value }))
        }
      />
      <Input
        label="Email"
        className="mb-5"
        onChange={(e) =>
          setFields((fields) => ({ ...fields, email: e.target.value }))
        }
      />
      <Input
        label="Password"
        className="mb-5"
        onChange={(e) =>
          setFields((fields) => ({ ...fields, password: e.target.value }))
        }
      />
      <Input
        label="Re-Password"
        className="mb-5"
        onChange={(e) =>
          setFields((fields) => ({ ...fields, rePassword: e.target.value }))
        }
      />
      <button
        onClick={submit}
        className="flex justify-center items-center text-white rounded-md text-sm font-medium w-72 h-10 bg-gray-400 hover:bg-gray-300"
      >
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
