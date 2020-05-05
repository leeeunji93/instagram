import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import LoginForm from "./Login/LoginForm";
import MyFeed from "./Feed/MyFeed";



class App extends Component {
    render() {
        return (
            <div>
                <Link to="/">피드</Link>
                <Link to="./Login/LoginForm">로그인창</Link>
                <Route exact path='/' component={MyFeed}/>
                <Route path='./Login/LoginForm' component={LoginForm}/>
            </div>
        );
    }
}

export default App;