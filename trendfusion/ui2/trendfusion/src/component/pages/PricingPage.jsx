import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/PricingPage.css';
import '../../assets/css/colors/colors.css';
import Starter from '../../assets/images/yt_starter.png';
import Creator from '../../assets/images/yt_creator.png';
import Enterprise from '../../assets/images/yt_enterprise.png';

const Pricing = () =>{
    const [menuopen, setMenuOpen] = useState(false);
    const nav = useNavigate('');
    return(
        <>
        <body className="pricing-body">
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
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="" onClick={()=>nav('/book-demo')}>Book Demo</a></li>
                        <li className="landing-nav-links-btns">
                            <button className="landing-btn" onClick={()=>nav('/welcome')}>Log in</button>
                        </li>
                    </ul>
                    <div className="landing-nav-btns">
                        <li><a className="landing-btn btn-primary" onClick={()=>nav('/welcome')}>Log in</a></li>
                    </div>
                </nav>
                    <section className="pricing-card pricing-container pricing-grid">
                        <div className="pricing-card-container pricing-grid">
                            {/* Starter */}
                            <article className="pricing-card-content pricing-grid">
                                <div className="pricing-card-p">
                                    <div className="pricing-card-p-number">
                                        <span className="pricing-card-p-symbol">₹</span> 1200
                                    </div>
                                    <span className="pricing-card-p-month">/month</span>
                                </div>

                                <header className="pricing-card-header">
                                    <div className="pricing-card-header-circle pricing-grid">
                                        <img src={Starter} alt="" className="pricing-img pricing-header-img" />
                                    </div>
                                    <span className="pricing-card-header-subtitle">Basic</span>
                                    <h1 className="pricing-card-header-title">Starter</h1>
                                </header>

                                <ul className="pricing-card-list pricing-grid">
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i>
                                        <p className="pricing-card-list-desp">1 Editor & 2 Guests</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i> 
                                        <p className="pricing-card-list-desp">30000 credits / month</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i> 
                                        <p className="pricing-card-list-desp">Limited Platform Supported</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-close-line pricing-not-allowed"></i> 
                                        <p className="pricing-card-list-desp">Creator Tool Support</p>
                                    </li>
                                </ul>

                                <button className="pricing-card-button" onClick={()=>nav('/payment')}>Get Started</button>
                            </article>

                            {/* Creator */}
                            <article className="pricing-card-content pricing-grid">
                                <div className="pricing-card-p">
                                    <div className="pricing-card-p-number">
                                        <span className="pricing-card-p-symbol">₹</span> 3200
                                    </div>
                                    <span className="pricing-card-p-month">/month</span>
                                </div>

                                <header className="pricing-card-header">
                                    <div className="pricing-card-header-circle pricing-grid">
                                        <img src={Creator} alt="" className="pricing-img pricing-header-img" />
                                    </div>
                                    <span className="pricing-card-header-subtitle">Popular</span>
                                    <h1 className="pricing-card-header-title">Creator</h1>
                                </header>

                                <ul className="pricing-card-list pricing-grid">
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i>
                                        <p className="pricing-card-list-desp">1 Editor & 4 Guests</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i> 
                                        <p className="pricing-card-list-desp">100000 credits / month</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i> 
                                        <p className="pricing-card-list-desp">Multi-Platform Supported</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i>  
                                        <p className="pricing-card-list-desp">Creator Tool Support</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-close-line pricing-not-allowed"></i> 
                                        <p className="pricing-card-list-desp">Live Collaboration</p>
                                    </li>
                                </ul>

                                <button className="pricing-card-button" onClick={()=>nav('/payment')}>Get Started</button>
                            </article>

                            {/* Enterprise */}
                            <article className="pricing-card-content pricing-grid">
                                <div className="pricing-card-p">
                                    <div className="pricing-card-p-number">
                                        <span className="pricing-card-p-symbol">₹</span> 7200
                                    </div>
                                    <span className="pricing-card-p-month">/year</span>
                                </div>

                                <header className="pricing-card-header">
                                    <div className="pricing-card-header-circle pricing-grid">
                                        <img src={Enterprise} alt="" className="pricing-img pricing-header-img" />
                                    </div>
                                    <span className="pricing-card-header-subtitle">Let's Talk</span>
                                    <h1 className="pricing-card-header-title">Enterprise</h1>
                                </header>

                                <ul className="pricing-card-list pricing-grid">
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i>
                                        <p className="pricing-card-list-desp">Custom # of editors and guests</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i> 
                                        <p className="pricing-card-list-desp">Custom # of credits per year</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i> 
                                        <p className="pricing-card-list-desp">Multi-Platform Supported</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i>  
                                        <p className="pricing-card-list-desp">Creator Tool Support</p>
                                    </li>
                                    <li className="pricing-card-list-item">
                                        <i class="ri-check-double-line pricing-card-list-icon"></i>  
                                        <p className="pricing-card-list-desp">Live Collaboration</p>
                                    </li>
                                </ul>

                                <button className="pricing-card-button" onClick={()=>nav('/book-demo')}>Book Demo</button>
                            </article>
                        </div>
                    </section>
                </body>
        </>
    );
}

export default Pricing;