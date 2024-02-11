import './App.css';
import Topnavbar from './Compo/Routes/Topnavbar';
import RouterCompo from './Compo/Routes/Router';
import Footer from './Compo/Routes/Footer';

function App() {
  return (
    <div className="App">
      <Topnavbar/>
      <RouterCompo/>
      <Footer/>
    </div>
  );
}

export default App;
