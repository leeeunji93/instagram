import React, {Component} from 'react';
import './LoginForm.css';
import insta from './instagram.png';
import phone from './phone-image.png';
import appstore from './appStore.png';
import google from './google.png';
import facebook from './facebook.png';

class LoginForm extends Component {
    state = {
        id: '',
        password: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = e => {
        e.preventDefault();
    };

    render() {
        return (
            <header>
                <section>
                    <div className="phone">
                        <img src={phone} alt='phone'/>
                    </div>
                    <div className="login_full">
                        <div className="login_form">
                            <div className="login_logo">
                                <img src={insta} alt='instagrm'/>
                            </div>
                            <form className="login_input">
                                <input
                                    name="id"
                                    type="text"
                                    placeholder="Phone number,username, or email"
                                    onChange={this.handleChange}

                                />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}

                                />
                                <div className="login_btn">
                                    <button onClick={this.handleClick}>로그인</button>
                                </div>
                            </form>
                            <div className="login_or">
                                <p>또는</p>
                            </div>
                            <div className="login_facebook">
                                <img src={facebook} alt='facebook'/>
                                <a href='#' onClick={this.handleClick}> Facebook으로 로그인
                                </a>
                            </div>
                            <div className="login_forgot">
                                <a href='#' onClick={this.handleClick}> 비밀번호를 잊으셨나요?
                                </a>
                            </div>
                        </div>
                        <div className="login_signUp">
                            <p>계정이 없으신가요?</p>
                            <a href="#">가입하기</a>
                        </div>
                        <div className="login_app">
                            <p>앱을 다운로드 하세요</p>
                            <div className="login_icon">
                                <img src={appstore} alt="appStore"/>
                                <img src={google} alt="google"/>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
}

export default LoginForm;