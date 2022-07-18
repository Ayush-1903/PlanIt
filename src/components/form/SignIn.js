import React,{useState} from 'react';
import { GoogleLogin, GoogleLogout} from 'react-google-login';
import { Link } from 'react-router-dom';
import signin from '../../assets/form-images/SignIn.svg';

function SignIn(){

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
                        <img src={signin} />
                    </div>
                    <div className="login-content">
                        <form action="index.html">
                            <h2 className="title">Log in to PlanIt</h2>

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
                                        <input onFocus={addPass} onBlur={remPass} type="password" className="passw"/>
                                </div>
                            </div>

                            <a href="#" className="forgot">Forgot Password?</a>
                            <input type="submit" className="bt" value="Log In" />

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

                            <hr />
                            <Link to="/signup" className="newhere">New here? Sign up</Link>
                        </form>
                    </div>  
                </div>
            </div>
        )
    }

export default SignIn;