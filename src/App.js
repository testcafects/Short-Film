import style from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Header from "./molecules/header/header.js";
import ListPage from './pages/list-page/list-page.js';
import DetailPage from './pages/Detail/Detail.js';

function App() {
  return (
    <div className={style['app']}>
      <Header />
      <section className={style['app__container']}>
        <Router>
          <Switch>
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
