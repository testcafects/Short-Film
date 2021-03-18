import {
  ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./molecules/header/header.js";
import DetailPage from "./pages/Detail/Detail.js";
import ListPage from "./pages/list-page/list-page.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import SignupPage from "./pages/SignupPage/SignupPage";
import style from "./App.module.scss";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <div className={style["app"]}>
      <ApolloProvider client={client}>
        <Header className={style["app__header"]} />
        <section className={style["app__container"]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/list" />
              </Route>
              <Route path="/list">
                <ListPage />
              </Route>
              <Route path="/detail/:id">
                <DetailPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <SignupPage />
              </Route>
            </Switch>
          </Router>
        </section>
      </ApolloProvider>
    </div>
  );
}

export default App;
