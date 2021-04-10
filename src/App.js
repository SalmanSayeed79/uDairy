import logo from './logo.svg';
import {Route, BrowserRouter,Switch} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Admin from "./Pages/Admin"
import Production from './Pages/Production'
import Distribution from './Pages/Distribution'
import Wholesale from './Pages/Wholesale'
import Retail from './Pages/Retail'
import Customer from './Pages/Customer'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/admin' exact component={Admin}/>
        <Route path='/admin/production' exact component={Production}/>
        <Route path='/admin/distribution' exact component={Distribution}/>
        <Route path='/admin/wholesale' exact component={Wholesale}/>
        <Route path='/admin/retail' exact component={Retail}/>
        <Route path='/admin/customer' exact component={Customer}/>
        <Route path='/shop' exact component={Customer}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
