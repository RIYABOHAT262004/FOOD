import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Menu from "./Components/Pages/Menu";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact Component= {Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About}/> 
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
