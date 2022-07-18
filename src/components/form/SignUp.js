import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout} from 'react-google-login';
import './signup.css';
import hello from '../../assets/form-images/Hello.svg';

function SignUp(){

    function addName(){
        document.querySelector('.input-div').classList.add('focus');
    }

    function remName(){
        if(document.querySelector('.name').value == ""){
            document.querySelector('.input-div').classList.remove('focus');
        }
    }

    function addEmail(){
        document.querySelector('.emails').classList.add('focus');
    }

    function remEmail(){
        if(document.querySelector('.mail').value == ""){
            document.querySelector('.emails').classList.remove('focus');
        }
    }

    function addPass(){
        document.querySelector('.effect').classList.add('focus');
    }

    function remPass(){
        if(document.querySelector('.passw').value == ""){
            document.querySelector('.effect').classList.remove('focus');
        }
    }

    const clientId = "959081491218-ucbkfo5qbu79lh2sgjqchoit1ak8js5b.apps.googleusercontent.com";

    const [showLoginBtn, setShowLoginBtn] = useState(true);
    
    const onLogin = (res) => {
        console.log('Login Success: ', res.profileObj);
        setShowLoginBtn(false);

    }

    const onFailure = (res) => {
        console.log('Login Failed: ', res);
    }
    
    return(
        <div>
            <div className="main">
                <div className="img">
                    <img src={hello}/>
                </div>
                <div className="login-content">
                    <form action="/category">
                        <h2 className="title">Sign up for your account</h2>
                        <div className="input-div one">
                            <div className="i">
                                    <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                    <h5>Username</h5>   
                                    <input onFocus={addName} onBlur={remName} type="text" name="username" className="name" />
                            </div>
                        </div>

                        <div className="input-div one emails">
                            <div className="i">
                                    <i className="fas fa-envelope"></i>
                            </div>
                            <div className="div">
                                    <h5>Email Id</h5>   
                                    <input onFocus={addEmail} onBlur={remEmail} type="email" className="mail"/>
                            </div>
                        </div>

                        <div className="input-div pass effect">
                            <div className="i"> 
                                    <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                    <h5>Password</h5>
                                    <input onFocus={addPass} onBlur={remPass} type="password" className="passw" required/>
                            </div>
                        </div>

                        <Link to="/login" className="forgot">Already have an account? Log In</Link>
                        <Link to="/category" className="sub"><input type="submit" className="bt" value="Sign Up" /></Link>
                        
                        <h5 className="divide">OR</h5>

                        <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark">
                            {showLoginBtn ?
                                <GoogleLogin
                                        clientId={clientId}
                                        buttonText="Continue With Google"
                                        onSuccess={onLogin}
                                        onFailure={onFailure}
                                        cookiePolicy={'single_host_origin'}
                                /> : null}
                        </div>
                    </form>
                </div>  
            </div>
        </div>
        )
    }
    
export default SignUp;