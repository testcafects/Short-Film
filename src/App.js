import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./molecules/header/header.js";
import DetailPage from "./pages/Detail/Detail.js";
import ListPage from "./pages/list-page/list-page.js";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style["app"]}>
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
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
