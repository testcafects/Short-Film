// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
// import Routes from "./Routes.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import SignupPage from "./pages/SignupPage/SignupPage"

function App() {
  return (
    <div className="App">
      {/* <LoginPage />      */}
      <SignupPage />
      {/* <Routes />  */}
    </div>
  );
}

export default App;
