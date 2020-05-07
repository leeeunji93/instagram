import React, {Component} from 'react';
import './Profile.css'
import './Reset.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faHome, faCompass, faHeart,faCog,faTh,faDesktop,faBookmark,faCamera}
from '@fortawesome/free-solid-svg-icons'
import instagram from './instagram1.png'
import profile from './profile_ profile_.jpg'
import pic_1 from './pic_1.jpg'
import pic_2 from './pic_2.jpg'
import pic_3 from './pic_3.jpg'
import pic_4 from './pic_4.jpg'
import pic_5 from './pic_5.jpg'
import pic_6 from './pic_6.jpeg'


library.add(fab, faHome, faHeart, faCompass,faCog, faTwitter,faTh,faDesktop,faBookmark,faCamera);


class Profile extends Component {

    state = {
        search: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = () => {
        this.props.history.push('#')
    };

    render() {
        return (
            <div className='wrapper'>
                {/*header는 부모가 될 수 없나?*/}
                <header>
                    <div className='profile_header'>
                    <div className='profile_logo'>
                        <Link to='/MyFeed'> <img
                            src={instagram}
                            alt='instagram'
                        />
                        </Link>
                    </div>
                    <input
                        className='profile_input'
                        name='search'
                        onChange={this.handleChange}
                        value={this.state.search}
                        /*placeholder에 사진 넣는법 알아보*/
                        placeholder='검색'
                    />
                    <div className='profile_icon'>
                        <Link to={'/MyFeed'}><FontAwesomeIcon
                            className='profile_icon_home'
                            icon="home"
                        />
                        </Link>
                        <FontAwesomeIcon
                            className='profile_icon_twitter'
                            icon={['fab', 'twitter']}
                        />
                        <FontAwesomeIcon
                            className='profile_icon_compass'
                            icon="compass"
                        />
                        <FontAwesomeIcon
                            className='profile_icon_heart'
                            icon="heart"
                        />
                        <Link to={'/Profile'}><img
                            className='profile_icon_profile'
                            src={profile}
                            alt='profile'
                        /> </Link>
                    </div>
                    </div>
                </header>
                {/*헤더 빼고 피드 전체*/}
                <section className='section_all'>
                    <div className='section_top'>
                        <img
                            className='section_top_profile'
                            src={profile}
                            alt='profile'
                        />
                        <div className='section_top_info'>
                            <div className='section_top_info_1'>
                                <p>molbomfilm</p>
                                <button
                                    onClick={this.handleClick}>프로필 편집
                                </button>
                                <Link to={'/MyFeed'}><FontAwesomeIcon
                                    className='profile_icon_cog'
                                    icon="cog"
                                />
                                </Link>
                            </div>
                            <div className='section_top_info_2'>
                                <div className='section_top_info_2_1th'>게시물 <b>68</b></div>
                                <div className='section_top_info_2_2nd'>팔로워 <b>88</b></div>
                                <div className='section_top_info_2_3rd'>팔로워 <b>68</b></div>
                            </div>
                            <div className='section_top_info_3'>
                                <p>이은지</p>
                                <span>여름이 다</span>
                                <Link to={'/https://youtu.be/iXem9xX1Cl4'}>https://youtu.be/iXem9xX1Cl4</Link>
                            </div>
                        </div>
                    </div>
                    <div className='section_second'>
                        <div className='section_second_1th'>
                            <FontAwesomeIcon
                                className='section_second_1th_icon'
                                icon="th"
                            />
                            <span>게시물</span>
                        </div>
                        <div className='section_second_2nd'>
                            <FontAwesomeIcon
                                className='section_second_2nd_icon'
                                icon="desktop"
                            />
                            <span>IGTV</span>
                        </div>
                        <div className='section_second_3rd'>
                            <FontAwesomeIcon
                                className='section_second_3rd_icon'
                                icon="bookmark"
                            />
                            <span>저장됨</span>
                        </div>

                        <div className='section_second_4th'>
                            <FontAwesomeIcon
                                className='section_second_4th_icon'
                                icon="camera"
                            />
                            <span>태그</span>
                        </div>

                    </div>
                    <div className='section_third'>
                        <div className='pic_all'>
                            <div className= 'pic_1'>
                                <img src={pic_1}/>
                                <div className='pic_1_overlay'>
                                        <FontAwesomeIcon
                                            className='pic_1_icon_heart'
                                            icon="heart"
                                        />
                                </div>
                            </div>
                            <div className= 'pic_2'>
                                <img src={pic_2}/>
                            </div>
                            <div className= 'pic_3'>
                                <img src={pic_3}/>
                            </div>
                            <div className= 'pic_4'>
                                <img src={pic_4}/>
                            </div>
                            <div className= 'pic_5'>
                                <img src={pic_5}/>
                            </div>
                            <div className= 'pic_6'>
                                <img src={pic_6}/>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Profile;