import React, { useEffect, useState } from "react";
import '../../assets/css/LandingPage.css';
import '../../assets/css/colors/colors.css';
import mainImg from '../../assets/images/yt_influncers.png';
import Features from '../../assets/images/yt_features.png';
import Share from '../../assets/images/yt_share.png';
import Beta from '../../assets/images/yt_join.png';
import ScrollReveal from 'scrollreveal';
import { useNavigate } from "react-router-dom";


const LandingPage = ()=>{
    const [menuopen, setMenuOpen] = useState(false);
    const nav = useNavigate('');
    useEffect(()=>{
        const ScrollRevealOptions = {
            distance : "50px",
            origin: "bottom",
            duration: 1000,
        };
        ScrollReveal().reveal(".landing-header-img img", {
            ...ScrollRevealOptions,
            origin: "right",
        });
        ScrollReveal().reveal(".landing-header-content h1", {
            ...ScrollRevealOptions,
            delay: 500,
        });
        ScrollReveal().reveal(".landing-header-content p", {
            ...ScrollRevealOptions,
            delay: 1000,
        });
        ScrollReveal().reveal(".landing-header-links", {
            ...ScrollRevealOptions,
            delay: 1500,
        });
        ScrollReveal().reveal(".landing-steps-card", {
            ...ScrollRevealOptions,
            interval: 500,
        });
        ScrollReveal().reveal(".landing-feature-img img",{
            ...ScrollRevealOptions,
            origin: "left",
        });
        ScrollReveal().reveal(".landing-features-list li",{
            ...ScrollRevealOptions,
            interval: 500,
        });
        ScrollReveal().reveal(".landing-platform-content img",{
            ...ScrollRevealOptions,
            origin: "bottom",
        });
        ScrollReveal().reveal(".landing-platform-card:nth-child(3), .landing-platform-card:nth-child(2), .landing-platform-card:nth-child(1)",{
            ...ScrollRevealOptions,
            origin: "left",
            interval: 500,
        });
        ScrollReveal().reveal(".landing-platform-card:nth-child(6), .landing-platform-card:nth-child(5), .landing-platform-card:nth-child(4)",{
            ...ScrollRevealOptions,
            origin: "right",
            interval: 500,
        });
        ScrollReveal().reveal(".landing-join-img",{
            ...ScrollRevealOptions,
            origin: "right",
        });
    },[]);
    return(
        <>
            <div className="landing-body">
                <header className="landing-header">
                    <nav className="landing-navbar">
                        <div className="landing-nav-header">
                            <div className="landing-nav-logo">
                                <a href="" onClick={()=>nav('/')}>trendfusion</a>
                            </div>
                            <div className="landing-nav-menu-btn" id="menu-btn" onClick={()=>setMenuOpen(!menuopen)}>
                                <i class={menuopen ? ' ri-close-large-line':'ri-menu-line'}></i>
                                {/* */}
                            </div>
                        </div>
                        <ul className={menuopen ? "landing-nav-links open-menu" : "landing-nav-links"} id="nav-links">
                            <li><a href="#platform">Platform</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#enterprise">Enterprise</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="" onClick={()=>nav('/book-demo')}>Book Demo</a></li>
                            <li className="landing-nav-links-btns">
                                {/* <li><a href="" onClick={()=>nav('/welcome')}>Log in</a></li> */}
                                <button className="landing-btn"  onClick={()=>nav('/pricing')}>Get Started <i class="ri-arrow-right-line"></i></button>
                            </li>
                        </ul>
                        <div className="landing-nav-btns">
                            <li><a className="landing-btn btn-primary" onClick={()=>nav('/welcome')}>Log in</a></li>
                            <button className="landing-btn btn-secondary" onClick={()=>nav('/pricing')}>Get Started <i class="ri-arrow-right-line"></i></button>
                        </div>
                    </nav>
                    <div className="landing-section-container landing-header-container" id="platform">
                        <div className="landing-header-img">
                            <img src={mainImg} alt="" />
                        </div>
                        <div className="landing-header-content">
                            <h1><span className="landing-text-non-gradient">Turn idea to script</span> <br />in <span className="landing-text-gradient">minutes</span></h1>
                            <p>
                                Create studio-quality script with AI and voiceovers, with just a click .
                            </p>
                            <div className="landing-header-links">
                                <a href="#">
                                    <span>Create Script for Free <i class="ri-arrow-right-line"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="landing-section-container landing-steps-container">
                    <p className="landing-section-subheader landing-subtitle">From idea to script in just 3 steps</p>
                    <h2 className="landing-section-header">How to generate script ?</h2>
                    <div className="landing-steps-grid">
                        <div className="landing-steps-card">
                            <span><i class="ri-lightbulb-line"></i></span>
                            <h4>Write a topic of your script</h4>
                            <p>In few words describe the topic of your script.</p>
                        </div>
                        <div className="landing-steps-card">
                            <span><i class="ri-draft-line"></i></span>
                            <h4>Describe objective of your script</h4>
                            <p>Write about what kind of script you need.</p>
                        </div>
                        <div className="landing-steps-card">
                            <span><i class="ri-video-on-fill"></i></span>
                            <h4>Choose the platform for posting</h4>
                            <p>Choose suitable platform from the dropdown to fit the target audience.</p>
                        </div>
                    </div>
                </section>

                <section className="landing-section-container landing-features-container" id="features">
                    <div className="landing-feature-img">
                        <img src={Features} alt="" />
                    </div>
                    <div className="landing-features-content">
                        <p className="landing-section-subheader landing-subtitle">Features</p>
                        <h2 className="landing-section-header">Why choose trendfusion for automating your script generation process?</h2>
                        <ul className="landing-features-list">
                            <li>
                                <span><i class="ri-magic-line"></i></span>
                                <div>
                                    <h4>Instant Realtime data processed AI generated scripts</h4>
                                    <p>
                                        No need to scarp information from web resourses, just use AI to generate scripts instant.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span><i class="ri-flashlight-line"></i></span>
                                <div>
                                    <h4>Available 24/7</h4>
                                    <p>
                                        With AI tools, you don't need to rely on writers to create high-quality content.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span><i class="ri-money-rupee-circle-line"></i></span>
                                <div>
                                    <h4>Cost effective way</h4>
                                    <p>
                                        Hiring skilled human writers can be expensive, especially for high-quality scripts, just use AI to perform it with low cost.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="landing-section-container landing-platforms-access" id="enterprise">
                    <p className="landing-section-subheader landing-subtitle">Multi-platform Support</p>
                    <h2 className="landing-section-header">
                        Develop your scrips to your favorite platforms
                    </h2>
                    <div className="landing-platform-content">
                        <div className="landing-platform-card">
                            <span><i class="ri-facebook-fill"></i></span>
                            <h4>Facebook</h4>
                        </div>
                        <div className="landing-platform-card">
                            <span><i class="ri-instagram-line"></i></span>
                            <h4>Instagram</h4>
                        </div>
                        <div className="landing-platform-card">
                            <span><i class="ri-youtube-line"></i></span>
                            <h4>Youtube</h4>
                        </div>
                        <div className="landing-platform-card">
                            <span><i class="ri-tiktok-line"></i></span>
                            <h4>TikTok</h4>
                        </div>
                        <div className="landing-platform-card">
                            <span><i class="ri-threads-line"></i></span>
                            <h4>Threads</h4>
                        </div>
                        <div className="landing-platform-card">
                            <span><i class="ri-twitter-x-fill"></i></span>
                            <h4>Twitter</h4>
                        </div>
                        <img src={Share} alt="" />
                    </div>
                </section>

                <section className="landing-section-container landing-beta-container">
                    <div className="landing-subscribe-grid">
                        <div className="landing-subscribe-content">
                            <p className="landing-section-subheader landing-subtitle">Beta Community</p>
                            <h2 className="landing-section-header">Join the Content Creators Beta Programme.</h2>
                            <p>
                                Unlock the next level of content creation with our beta program! 
                                Experience upcoming features like Realtime Video Editing Support, Voiceover On Different Languaages, and Many More. 
                                Join now to shape the future of creative tools!
                            </p>
                            <div className="landing-join-links">
                                <a href="#">
                                    <span>Join Us <i class="ri-arrow-right-line"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="landing-join-img">
                            <img src={Beta} alt="" />
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="landing-section-container landing-footer-container">
                        <div className="landing-footer-col">
                            <h4>Features</h4>
                            <ul className="landing-footer-links">
                                <li><a href="#">All Features</a></li>
                                <li><a href="#">Free AI Script Generator</a></li>
                                <li><a href="#">AI Script Editing</a></li>
                                <li><a href="#">Text to Script</a></li>
                                <li><a href="#">MultiPlatform Support</a></li>
                                <li><a href="#">TrendFusion Tools</a></li>
                            </ul>
                        </div>
                        <div className="landing-footer-col">
                            <h4>Resourses</h4>
                            <ul className="landing-footer-links">
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Script Templates</a></li>
                                <li><a href="#">Enterprise</a></li>
                                <li><a href="#">Join Beta</a></li>
                                <li><a href="#">TrendFusion Blog</a></li>
                                <li><a href="#">Technical Support</a></li>
                            </ul>
                        </div>
                        <div className="landing-footer-col">
                            <h4>Company</h4>
                            <ul className="landing-footer-links">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">AI Research</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Contact Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="landing-section-container landing-footer-bar">
                        <h4>trendfusion</h4>
                        <p>© 2024 trendfusion Limited. All rights reserved.</p>
                        <ul className="landing-footer-socials">
                            <li>
                                <a href="#"><i class="ri-youtube-line"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="ri-instagram-line"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="ri-facebook-fill"></i></a>
                            </li>
                        </ul>
                            
                    </div>
                </footer>
            </div>
        </>
    )
}

export default LandingPage;


// YTLink : https://youtu.be/3ca77ehT5yc?si=6FIKDZq5iMopsvP8