import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
function App() {
  return (
    <>
     <Router>
     <Navbar/>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route exact path='/services'>
         <Services/>
       </Route>
       <Route exact path='/products'>
         <Products/>
       </Route>
       <Route exact path='/sign-up'>
         <SignUp/>
       </Route>
     </Switch>
     </Router>
    </>
  );
}

export default App;
