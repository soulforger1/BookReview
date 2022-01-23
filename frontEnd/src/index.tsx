import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AuthProvider } from "./auth/auth-provider";

const client = new ApolloClient({
  // uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: "http://localhost:5000/graphql" }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
