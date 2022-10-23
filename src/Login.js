import './App.css';
import Amplify, {API} from 'aws-amplify'
import React, {useEffect, useState} from 'react'
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react-v1';
import config from "./aws-exports";

Amplify.configure(config);

function Login() {
    return (
        <div className="Login">
            <header className="App-header">
                <h2>Welcome to Game Based Learning on AWS!!</h2>
            </header>
            <body>
            <div>
                <center>
                    <div className="logdiv">
                        <h3>What would you like to do?</h3>
                    </div>
                    <div className="div2">
                        <form>
                            <input className="button" type="submit" value="Math Quiz"/>
                        </form>
                    </div>
                    <div className="div2">
                        <form>
                            <input className="button" type="submit" value="Geo Quiz"/>
                        </form>
                    </div>
                    <div className="div2">
                        <form>
                            <input className="button" type="submit" value="Standings"/>
                        </form>
                    </div>

                </center>
            </div>
            <div>
                <AmplifySignOut/>
            </div>
            </body>
        </div>
    );
}

export default withAuthenticator(Login);
