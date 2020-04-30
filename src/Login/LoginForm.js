import React, {Component} from 'react';
import './LoginForm.css'

class LoginForm extends Component {
    state = {
        id:'',
        password: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="wrapper">
                <header>
                    <section className="top">
                        <div className="login_logo">
                            <img src="Instagram.png" alt="Instagram"/>
                        </div>
                        <form className = "login_input">
                            <input
                                name = "id"
                                type = "text"
                                placeholder = "Phone number,username, or email"
                                onChange = {this.handleChange}

                            />

                            <input
                                name = "password"
                                type = "password"
                                placeholder = "Password"
                                onChange = {this.handleChange}

                            />
                            <div className="login_btn">
                                <button type="submit">로그인</button>
                            </div>
                        </form>

                    </section>
                </header>
            </div>
        );
    }
}

export default LoginForm;