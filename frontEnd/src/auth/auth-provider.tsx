import { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { useMutation, gql } from "@apollo/client";

type contextType = {
  token: undefined | string;
  login: (email: string, password: string) => Promise<string | undefined>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<any>;
  logout: () => string;
};
const LOGIN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
const SIGNUP = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export const AuthContext = createContext<contextType>({
  token: undefined,
  login: async () => "",
  signup: async () => "",
  logout: () => "",
});

export const AuthProvider = ({ children }: any) => {
  const [LogIn] = useMutation(LOGIN);
  const [Register] = useMutation(SIGNUP);
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    setToken(Cookie.get("token"));
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await LogIn({ variables: { email, password } });

      setToken(data.login.token);
      Cookie.set("token", data.login.token);

      return data.login.token;
    } catch (err) {
      throw err;
    }
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const { data } = await Register({
        variables: { email, password, firstName, lastName },
      });

      console.log(data);
      setToken(data.register.token);
      Cookie.set("token", data.register.token);

      return data;
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    Cookie.remove("token");

    return "logged out";
  };

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
