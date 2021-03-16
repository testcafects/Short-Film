import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './Components/HomePage/HomePage';
import Headers from './organisms/header/header.js'
import FeedsPage from './Components/FeedsPage/FeedsPage';
import CardCustom from './atoms/CardCustom/CardCustom';
import CardGrid from './molecules/CardsGrid/CardGrid';
import Cardlayout from './Components/Cardlayout/Cardlayout';

function App() {
  return (
    <div className="App">
    <Headers /> 
      <HomePage/>

      <FeedsPage> </FeedsPage>           
    
       {/* <Cardlayout />        */}
        </div> 
  );
}

export default App;
