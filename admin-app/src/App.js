import React,{useEffect} from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux';
import {isUserLoggedIn} from './actions'

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(()=>{
    if (!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
},[])


  return (
    <div className="App">
    
        <Switch>
          <PrivateRoute path="/" exact component={Home}/>
          <PrivateRoute path="/products" exact component={()=><p>
            products
          </p>}/>
          <PrivateRoute path="/orders" exact component={()=>
          <p> orders</p>
          }/>


          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      
    </div>
  );
}

export default App;
