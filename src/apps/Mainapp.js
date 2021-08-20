import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../Pages/home';


function MainApp(props){
  let namae=props.userName;
  console.log(namae);
  return(
    <>
    
    <Router>
      <Switch>
        <Route path='/' render={() => <Home userName={namae}  />} exact />
      </Switch>
      
    </Router>
    </>
  );

}
export default MainApp;