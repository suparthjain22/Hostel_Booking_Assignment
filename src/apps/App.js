import React, {Component} from 'react';
import MainApp from './Mainapp'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyCdQY_SjuaTl_VPDrUAwy9iUFBo9MlweeU",
  authDomain: "hostel-allocation-assign-a50e6.firebaseapp.com"
})

class App extends Component{
  state={isSignedIn:false}

  uiConfig ={
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount=()=>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn : !!user })
    })
  }

  render(){
  return(
    <>
    {this.state.isSignedIn ? (
    <>
    <MainApp userName={firebase.auth().currentUser.displayName}/>
    {/* <h1>awd {firebase.auth().currentUser.displayName}</h1> */}
    {/* <button onClick={() => firebase.auth().signOut()}>SignOut</button> */}
    </>
    ) : 
      (<StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />)
    } 
    </>
  );
  }

}
export default App;