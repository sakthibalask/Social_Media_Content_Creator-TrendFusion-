import React, { useState } from "react";
import '../../assets/css/BookDemo.css';
import '../../assets/css/colors/colors.css';
import { useNavigate } from "react-router-dom";

const BookDemo = () =>{
    const [menuopen, setMenuOpen] = useState(false);
    const nav = useNavigate('');
    return(
        <>
          <div className="demo-body">
                <nav className="landing-navbar demo-navbar">
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
                            <button className="landing-btn">Log in</button>
                        </li>
                    </ul>
                    <div className="landing-nav-btns">
                        <li><a className="landing-btn btn-primary" onClick={()=>nav('/welcome')}>Log in</a></li>
                    </div>
                </nav>
                <div className="demo-wrapper">
                    <header>Book your <span>24 hrs</span> trendfusion demo.</header>
                    <form action="#">
                        <div className="demo-dlb-field">
                            <div className="demo-field">
                                <input type="text" placeholder="First Name" />
                                <i class="ri-user-line"></i>
                            </div>
                            <div className="demo-field">
                                <input type="text" placeholder="Last Name" />
                                <i class="ri-user-line"></i>
                            </div>
                        </div>
                        <div className="demo-dlb-field">
                            <div className="demo-field">
                                <input type="text" placeholder="Work Email" />
                                <i class="ri-mail-line"></i>
                            </div>
                            <div className="demo-field">
                                <input type="text" placeholder="Mobile Number (with country code)" />
                                <i class="ri-phone-line"></i>
                            </div>
                        </div>
                        <div className="demo-message">
                            <textarea placeholder="Explain your work need..."></textarea>
                            <i class="ri-information-line"></i>
                        </div>
                        <div className="demo-button-area">
                            <button>Book Demo <i class="ri-arrow-right-line"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BookDemo;