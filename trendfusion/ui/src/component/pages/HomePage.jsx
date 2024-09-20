import React, { useEffect, useState } from "react";
import '../../assets/css/colors/colors.css';
import '../../assets/css/HomePage.css';
import YTLOGO from '../../assets/images/yt_ytlogo.png';
import YTINSTA from '../../assets/images/yt_insta.png';
import YTBLOG from '../../assets/images/yt_blog.png';
import YTCODE from '../../assets/images/yt_code.png';
import YTTWEET from '../../assets/images/yt_tweet.webp';
import TextEditor from "./EditPage";
import { useNavigate } from "react-router-dom";


const Dashboard = () =>{
    const [open, setOpen] = useState(false);
    const [textedit, setTextEdit] = useState(false);
    const [curr, setCurr] = useState('home');
    const handleEdit = () =>{
        setTextEdit(!textedit);
    };
    const val = 0;
    const nav = useNavigate('');
    return(
        <body className="script-body">
            <div className={open ? "script-sidebar script-open" : "script-sidebar"}>
                <div className="script-logo-content">
                    <div className="script-logo">
                        <div className="script-logo-name" onClick={()=>nav('/')}>Trendfusion</div>
                    </div>
                    <i class="ri-close-large-line" id="menu-btn" onClick={()=>setOpen(!open)}></i>
                </div>
                <ul className="script-nav-list">
                    <li>
                        <a href="" className={curr === 'home' ? "active-menu" : "" } onClick={()=>setCurr('home')}>
                            <i class="ri-home-2-line"></i>
                            <span className="script-link-name">Home</span>
                        </a>
                        {/* <span className="script-tooltip">Home</span> */}
                    </li>
                    <li>
                        <a href="#"  className={curr === 'history' ? "active-menu" : "" } onClick={()=>setCurr('history')}>
                            <i class="ri-history-line"></i>
                            <span className="script-link-name" >History</span>
                        </a>
                        {/* <span className="script-tooltip">Home</span> */}
                    </li>
                    <li>
                        <a href="#"  className={curr === 'usage' ? "active-menu" : "" } onClick={()=>setCurr('usage')}>
                            <i class="ri-bill-line"></i>
                            <span className="script-link-name" >Usage</span>
                        </a>
                        {/* <span className="script-tooltip">Billing</span> */}
                    </li>
                    <li>
                        <a href="#"  className={curr === 'settings' ? "active-menu" : "" } onClick={()=>setCurr('settings')}>
                            <i class="ri-settings-4-line"></i>
                            <span className="script-link-name" >Settings</span>
                        </a>
                        {/* <span className="script-tooltip">Settings</span> */}
                    </li>
                    <li>
                        <a href="">
                            <i class="ri-logout-box-line"></i>
                            <span className="script-link-name">Logout</span>
                        </a>
                        {/* <span className="script-tooltip">Settings</span> */}
                    </li>
                </ul>
                <div className="script-usage-content">
                    <div className="script-usage">
                        <div className="script-usage-details">
                            <h3 className="script-usage-title">Credits</h3>
                            <div className="script-usage-area">
                                <div className="script-usage-bar">
                                    <span className="script-fill" style={{width: `${val}%`}}></span>
                                </div>
                                <p className="script-usage-amt">0/10000 credit used</p>
                            </div>
                        </div>
                        <button className="script-upgrade-btn">Upgrade</button>
                    </div>
                    
                </div>
            </div>
            <header className="script-header">
                    <div className="script-header-logo">
                        <div className="script-header-logo-name">Trendfusion</div>
                    </div>
                    <i class="ri-menu-line" id={open ? "menu-close" : "menu-btn"} onClick={()=>setOpen(!open)}></i>
            </header>
            {curr === 'home' && (
                <section className="script-main">
                {!textedit ?
                    <div className="script-container">
                        <div className="script-wrapper">
                                {/* Box 1 */}
                                <div className="script-box">
                                    <div className="script-icon">
                                        <img src={YTLOGO} alt="" />
                                    </div>
                                    <div className="script-content">
                                        <h4 className="script-title">Youtube Creator</h4>
                                        <p className="script-descp">An AI-powered tool which generates script for your youtube video based on provided topic.</p>
                                    </div>
                                    <div className="script-create-btn" onClick={()=>handleEdit()}>
                                        <a>Create <i class="ri-arrow-right-line"></i></a>
                                    </div>
                                </div>
                                {/* Box 2 */}
                                <div className="script-box">
                                    <div className="script-icon">
                                        <img src={YTINSTA} alt="" />
                                    </div>
                                    <div className="script-content">
                                        <h4 className="script-title">Instagram Creator</h4>
                                        <p className="script-descp">An AI-powered tool which generates script for your instagram reels based on provided topic.</p>
                                    </div>
                                    <div className="script-create-btn">
                                        <a href="#">Create <i class="ri-arrow-right-line"></i></a>
                                    </div>
                                </div>
                                {/* Box 3 */}
                                <div className="script-box">
                                    <div className="script-icon">
                                        <img src={YTBLOG} alt="" />
                                    </div>
                                    <div className="script-content">
                                        <h4 className="script-title">Blog Writer</h4>
                                        <p className="script-descp">An AI-powered tool which generates articles for your blogs based on provided topic.</p>
                                    </div>
                                    <div className="script-create-btn">
                                        <a href="#">Create <i class="ri-arrow-right-line"></i></a>
                                    </div>
                                </div>
                                {/* Box 4 */}
                                <div className="script-box">
                                    <div className="script-icon">
                                        <img src={YTCODE} alt="" />
                                    </div>
                                    <div className="script-content">
                                        <h4 className="script-title">Code Writer</h4>
                                        <p className="script-descp">An AI-powered tool which generates code for you based on provided topic.</p>
                                    </div>
                                    <div className="script-create-btn">
                                        <a href="#">Create <i class="ri-arrow-right-line"></i></a>
                                    </div>
                                </div>
                                {/* Box 5 */}
                                <div className="script-box">
                                    <div className="script-icon">
                                        <img src={YTTWEET} alt="" />
                                    </div>
                                    <div className="script-content">
                                        <h4 className="script-title">Tweet Writer</h4>
                                        <p className="script-descp">An AI-powered tool which generates tweet for you based on provided context.</p>
                                    </div>
                                    <div className="script-create-btn">
                                        <a href="#">Create <i class="ri-arrow-right-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        :
                        <TextEditor/>
                       
                        }
                </section>
            )}
               
        </body>
    );
}

export default Dashboard;




// Side Bar : https://youtu.be/wEfaoAa99XY?si=6JBceZoBxEysCu7S
// 
// Box Grid : https://youtu.be/b8chCc_hc-o?si=7SeeZKXKHDGSRfb-