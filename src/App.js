import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Graphs from './components/Graphs';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/About';
import Pnf from './components/Pnf';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path="/" component={Body} />
          <Route exact path="/home" component={Body} />
          <Route exact path="/graphs" component={Graphs} />
          <Route exact path="/about" component={About} />
          <Route  component={Pnf} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
