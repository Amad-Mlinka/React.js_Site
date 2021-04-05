import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact></Route>
     </Switch>
    </Router>
      
    </>
  );
}

export default App;
