import React, {Component} from 'react';
import {Route,HashRouter} from 'react-router-dom';
import LoginForm from "./Login/LoginForm";
import MyFeed from "./Feed/MyFeed";
import Profile from "./Profile/Profile";



class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path='/' exact={true} component={LoginForm}/>
                <Route path='/MyFeed' component={MyFeed}/>
                <Route  path='/Profile' component={Profile}/>
            </HashRouter>
        );
    }
}

export default App;