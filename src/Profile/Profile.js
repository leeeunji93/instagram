import React, {Component} from 'react';
import './Profile.css'
import './Reset.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faHome, faCompass, faHeart,faCog} from '@fortawesome/free-solid-svg-icons'
import instagram from './instagram1.png'
import profile from './profile_ profile_.jpg'


library.add(fab, faHome, faHeart, faCompass, faTwitter,faCog);


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
                <section>
                    <div className='section_top'>
                       <img
                           className='section_top_profile'
                           src={profile}
                           alt='profile'
                       />
                       <div className='section_top_info'>
                           <div className='section_top_info_1'>
                               <p>molbomfilm</p>
                               <button onClick={this.handleClick}>프로필 편집</button>
                                   <Link
                                       to={'/MyFeed'}>
                                       <FontAwesomeIcon
                                       className='profile_icon_home'
                                       icon="Cog"
                                   />
                                   </Link>
                           </div>
                           <div className='section_top_info_2'>
                               <span>게시물</span>
                           </div>
                           <div className='section_top_info_3'>
                           </div>
                       </div>

                    </div>
                </section>

            </div>
        );
    }
}

export default Profile;