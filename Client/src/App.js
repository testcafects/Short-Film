import React from "react";
import "./App.css";
import CartPage from "./pages/CartPage/CartPage";
import client from './server/server.js'
import { ApolloProvider}  from '@apollo/client';
import {  gql } from '@apollo/client';

  // client.query({
  //   query: gql`
  //     query{
  //       validate(title:"DIWALI20")
  //     }
  //   `
  // })
  // .then(result => console.log(result.data));


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
