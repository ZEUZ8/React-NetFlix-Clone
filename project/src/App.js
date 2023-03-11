import '../src/App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/header/Navbar'
import{Action,Orginals} from "./urls"
import RowPost  from './components/rowPost/rowPost';
import Name from "./components/Test"


function App() {
  function just(id){
    console.log(id)
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          <Navbar />
          <Banner/>
          <RowPost url={Orginals} title="Netflix Orginals"/>
          <RowPost url={Action} title="Action" isSmall/>
        </p> */}
        <Name just={just} />
    
      </header>
      
    </div>
  );
}

export default App;
