import React, {Component} from 'react';
import './Myfeed.css'
import logo from '../Login/instagram.png';
import icon from './icon.png'
import pic_1_1 from './pic_1_1.jpg'
import pic_2 from './pic_2.jpg'
import pic_icon from './pic_icon.png'
import profile from './profile.jpg'
import story_1 from './story_1.png'
import story_2 from './story_2.png'
import story_3 from './story_3.png'


class MyFeed extends Component {
    render() {
        return (
            <div className="wrapper">
                <header>
                    <div className='header_screen'>
                        <div className='header_logo'>
                            <a href="#"> <img src={logo} alt='logo'/> </a>
                        </div>
                        <div className='header_dig'>
                            <input
                                name='dig'
                                placeholder='검색'
                            />

                        </div>
                        <div className='header_icon'>
                            <img src={icon} alt='icon'/>
                        </div>
                    </div>
                </header>
                <div className='feed'>
                    <section className="feed_content">
                        <div className="feed_1">
                            <div className="feed_1_top">
                                <img src={profile} alt='profile'/>
                                {/* <img src={forward} alt='forward'/>*/}
                                {/*이거 눌렀을 때 프로필로 가기 만들자*/}
                                <a href="#">molbomfilm</a>
                                <span>...</span>
                            </div>
                            <div className="feed_1_pic">
                                <img
                                    className='feed_1_picture'
                                    src={pic_1_1}
                                    alt="pic_1_1"/>
                                <img
                                    className='feed_1_icon'
                                    src={pic_icon}
                                    alt="pic_icon"/>
                                <h5>좋아요 1개</h5>
                                <a href='#' className='feed_1_pic_id'>molbomfilm</a> <span>흐.</span>
                                <div className='feed_1_pic_time'><small>1시간전</small></div>
                                <div className="feed_1_text">
                                    <div className="feed_1_comment">댓글 달기...</div>
                                    <div className="fee1d_1_comment_submit">게시</div>
                                </div>
                            </div>
                        </div>
                        <div className="feed_2">
                            <div className="feed_2_top">
                                <img
                                    src={profile}
                                    alt='profile'
                                />
                                {/* <img src={forward} alt='forward'/>*/}
                                {/*이거 눌렀을 때 프로필로 가기 만들자*/}
                                <a href="#">molbomfilm</a>
                                <span>...</span>
                            </div>
                            <div className="feed_2_pic">
                                <img
                                    className='feed_2_picture'
                                    src={pic_2}
                                    alt="pic_2"/>

                                <img
                                    className='feed_2_icon'
                                    src={pic_icon}
                                    alt="pic_icon"/>
                                <h5>좋아요 1개</h5>
                                <a href='#' className='feed_2_pic_id'>molbomfilm</a> <span>여름이</span>
                                <div className='feed_2_pic_time'><small>3시간전</small></div>
                                <div className="feed_2_text">
                                    <div className="feed_2_comment">댓글 달기...</div>
                                    <div className="fee1d_2_comment_submit">게시</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='aside'>
                        <header className='feed_profile'>
                            <img
                                src={profile}
                                alt='profile'
                            />
                            <div className='profile_name'>
                                <p>molbomfilm</p>
                                <small>이은지</small>
                            </div>
                        </header>
                        <article className='story_content'>
                            <div className='story_text'>
                                <div className='story'>
                                <b>스토리</b>
                                </div>
                                <div className='watch'>
                                <p >모두 보기</p>
                                </div>
                            </div>
                            <div className='story_people'>
                                <div className='story_1'>
                                    <img
                                        src={story_1}
                                        alt='story_1'
                                    />
                                    <div className='story_1_text'>
                                    <strong>thebatsweare</strong>
                                    <p>20시간전</p>
                                    </div>
                                </div>

                                <div className='story_2'>
                                    <img
                                        src={story_1}
                                        alt='story_2'
                                    />
                                    <div className='story_2_text'>
                                    <strong>molbom</strong>
                                    <p>10시간전</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className='recom_content'>
                            <div className='recom_text'>
                                <div className='recomtext'>
                                    <b>회원님을 위한 추천</b>
                                </div>
                                <div className='recomwatch'>
                                    <p >모두 보기</p>
                                </div>
                            </div>
                            <div className='recom_people'>
                                <div className='recom_1'>
                                    <img
                                        src={story_1}
                                        alt='recom_1'
                                    />
                                    <div className='recom_1_text'>
                                        <strong>thebatsweare</strong>
                                        <p>회원님을 팔로우합니다</p>
                                    </div>
                                    <span>팔로우</span>
                                </div>

                                <div className='recom_2'>
                                    <img
                                        src={story_1}
                                        alt='recom_2'
                                    />
                                    <div className='recom_2_text'>
                                        <strong>molbom</strong>
                                        <p>회원님을 팔로우합니다</p>
                                    </div>
                                    <span>팔로우</span>
                                </div>
                            </div>
                        </article>
                        <footer>
                            <div className="feed_link">
                                <ul>
                                    <li><a href="#">소개·</a></li>
                                    <li><a href="#">도움말·</a></li>
                                    <li><a href="#">홍보센터·</a></li>
                                    <li><a href="#">개인정보처리방침·</a></li>
                                    <li><a href="#">API·</a></li>
                                    <li><a href="#">채용정보·</a></li>
                                    <li><a href="#">약관·</a></li>
                                    <li><a href="#">위치·</a></li>
                                    <li><a href="#">인기계정·</a></li>
                                    <li><a href="#">해시태그·</a></li>
                                    <li><a href="#">언어·</a></li>
                                </ul>
                            </div>
                            <div className="feed_copyright">
                                © 2020 INSTAGRAM FROM FACEBOOK
                            </div>
                        </footer>

                    </section>
                </div>
            </div>


        );
    }
}

export default MyFeed;