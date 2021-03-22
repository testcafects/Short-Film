import React from "react";
import "./App.css";
import CartPage from "./pages/CartPage/CartPage";
import client from "./server/server.js";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CartPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
