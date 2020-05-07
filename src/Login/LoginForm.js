import React, {Component} from 'react';
import './Reset.css'
import './LoginForm.css';
import insta from './instagram.png';
import phone from './phone-image.png';
import appstore from './appStore.png';
import google from './google.png';
import facebook from './facebook.png';
import {Link} from "react-router-dom";

class LoginForm extends Component {
    state = {
        id: '',
        password:'',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    handleClick = () => {
        const {id,password} = this.state;
        if(id === 'molbomfilm'){
            if(password === '1234'){
                 this.props.history.push('/MyFeed');
            }
            else{
                alert('비밀번호가 틀렸습니다');
                this.props.history.push('/');

            }
        }
        else {
            alert('아이디가 일치하지 않습니다');
            this.props.history.push('/');
        }
    }



    render() {
        return (
            <div className='login_wrapper'>
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
                                    value={this.state.id}
                                    onChange={this.handleChange}

                                />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}

                                />

                                <div className="login_btn">
                                   {/*
                                   이건 그냥 다 넘어감. a태그 같은거
                                    <Link
                                        to={'/MyFeed'}
                                        onClick={this.handelClick}
                                        >로그인
                                </Link>
                                */}

                                {/*
                                <button onClick={()=>{history.push('/MyFeed')}}>

                                */}
                               <button onClick={this.handleClick}>로그인</button>
                                </div>

                            </form>
                            <div className="login_or">
                                <p>또는</p>
                            </div>
                            <div className="login_facebook">
                                <img src={facebook} alt='facebook'/>
                                <Link to={'#'}> Facebook으로 로그인</Link>

                            </div>
                            <div className="login_forgot">
                                <Link to={'#'}> 비밀번호를 잊으셨나요?
                                </Link>
                            </div>
                        </div>
                        <div className="login_signUp">
                            <p>계정이 없으신가요?</p>
                          <Link to={'#'}>가입하기</Link>
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
                <div className='footer'>
                <div className="login_link">
                    <ul>
                            <li>소개</li>
                            <li>도움말</li>
                            <li>홍보센터</li>
                            <li>개인 정보 처리 방식</li>
                            <li>API</li>
                            <li>채용 정보</li>
                            <li>약관</li>
                            <li>위치</li>
                            <li>인기 계정</li>
                            <li>해시태그</li>
                            <li>언어</li>
                    </ul>
                </div>
                <div className="login_copyright">
                    © 2020 INSTAGRAM FROM FACEBOOK
                </div>
                </div>
            </div>


        );
    }
}

export default LoginForm;




