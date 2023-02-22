import React,{Component} from 'react';
import '../LoginPage/LoginPage.css';
import {storage,auth} from '../firebase';
import {signInWithEmailAndPassword } from "firebase/auth";

class SignIN extends Component{
    constructor(props){
        super(props);
        this.state={ 
            emailId: null,
            password: null
        }
    }

    login=()=>{
        // localStorage.setItem("user","admin");
        // window.location.reload();
        signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem("users",JSON.stringify(user));
            window.location.reload();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    render(){
        return( 
  <div>
    <input className="loginpage_text"  onChange={(event)=>{this.state.emailId= event.currentTarget.value;}} type="text" placeholder='Phone number, username, or email'/>
    <input className="loginpage_text"  onChange={(event)=>{this.state.password= event.currentTarget.value;}} type="password" placeholder='Password'/>
    <button className='login_button' onClick={this.login}>Log In</button>

  </div>
        );
    }
}

export default SignIN;