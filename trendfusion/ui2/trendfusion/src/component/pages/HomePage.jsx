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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [textedit, setTextEdit] = useState(false);
    const [curr, setCurr] = useState('home');
    const [credits, setCredits] = useState(0);
    const [selectedContent, setSelectedContent] = useState(null); // To store selected content for EditPage
    const [islogged, setIslogged] = useState(false);
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    const handleEdit = (content) => {
        setTextEdit(true);
        setSelectedContent(content); // Pass content to the TextEditor
    };

    const getToken = ()=>{
        const email= sessionStorage.getItem('email');
        setEmail(email);
        if(email !== null){
            const data = {
                workEmail:email
            }
            axios.post("http://localhost:8181/user/logged",data)
            .then(function(response){
            if(response.status === 200){
                setIslogged(true);
                setToken(response.data.token);
            }
            }).catch(function(error){
                if(error.response.status === 403){
                    toast.warn(error.response.data.message,{
                        position: "top-right",
                        autoClose: 5000
                    });
        
                    setTimeout(()=>{
                        nav('/welcome');
                    },5005);
                    setIslogged(false);
                    sessionStorage.removeItem('email');
                }
            });
        }else{
            toast.warn("Session Expired",{
                position: "top-right",
                autoClose: 2000
            });

            setTimeout(()=>{
                nav('/welcome');
            },2005);
        }
    }

    useEffect(()=>{
        getToken();
    },[]);

    const handleLogout =() =>{
        axios.post("http://localhost:8181/user/logout", {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function(response){
            if(response.status === 200){
                toast.success(response.data.message,{
                    position:"top-right",
                    autoClose: 5000
                });
                sessionStorage.removeItem('email');
                setTimeout(()=>{
                    nav('/welcome');
                },5005);
            }
        }).catch(function(error){
            if(error.response.status === 403){
                toast.warn(error.response.data.message,{
                    position: "top-right",
                    autoClose: 5000
                });
    
                setTimeout(()=>{
                    nav('/auth');
                },5005);
                setIslogged(false);
                sessionStorage.removeItem('email');
            }
        });
    }

    const nav = useNavigate('');

    // Declare a list of content data
    const scriptData = [
        {
            title: "Youtube Creator",
            description: "An AI-powered tool which generates script for your youtube video based on provided topic.",
            image: YTLOGO,
            type: "youtube video"
        },
        {
            title: "Instagram Creator",
            description: "An AI-powered tool which generates script for your instagram reels based on provided topic.",
            image: YTINSTA,
            type: "instagram reel"
        },
        {
            title: "Blog Writer",
            description: "An AI-powered tool which generates articles for your blogs based on provided topic.",
            image: YTBLOG,
            type: "blog context"
        },
        {
            title: "Code Writer",
            description: "An AI-powered tool which generates code for you based on provided topic.",
            image: YTCODE,
            type: "code "
        },
        {
            title: "Tweet Writer",
            description: "An AI-powered tool which generates tweet for you based on provided context.",
            image: YTTWEET,
            type: "tweet"
        }
    ];

    return (
        <>
         <ToastContainer/>
        <body className="script-body">
            <div className={open ? "script-sidebar script-open" : "script-sidebar"}>
                <div className="script-logo-content">
                    <div className="script-logo">
                        <div className="script-logo-name" onClick={() => nav('/')}>Trendfusion</div>
                    </div>
                    <i class="ri-close-large-line" id="menu-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <ul className="script-nav-list">
                    <li>
                        <a href="" className={curr === 'home' ? "active-menu" : ""} onClick={() => setCurr('home')}>
                            <i class="ri-home-2-line"></i>
                            <span className="script-link-name">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={curr === 'history' ? "active-menu" : ""} onClick={() => setCurr('history')}>
                            <i class="ri-history-line"></i>
                            <span className="script-link-name">History</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={curr === 'usage' ? "active-menu" : ""} onClick={() => setCurr('usage')}>
                            <i class="ri-bill-line"></i>
                            <span className="script-link-name">Usage</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={curr === 'settings' ? "active-menu" : ""} onClick={() => setCurr('settings')}>
                            <i class="ri-settings-4-line"></i>
                            <span className="script-link-name">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={handleLogout}>
                            <i class="ri-logout-box-line"></i>
                            <span className="script-link-name">Logout</span>
                        </a>
                    </li>
                </ul>
                <div className="script-usage-content">
                    <div className="script-usage">
                        <div className="script-usage-details">
                            <h3 className="script-usage-title">Credits</h3>
                            <div className="script-usage-area">
                                <div className="script-usage-bar">
                                    <span className="script-fill" style={{ width: `${credits}%` }}></span>
                                </div>
                                <p className="script-usage-amt">{credits}/10000 credit used</p>
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
                <i class="ri-menu-line" id={open ? "menu-close" : "menu-btn"} onClick={() => setOpen(!open)}></i>
            </header>
            {curr === 'home' && (
                <section className="script-main">
                    {!textedit ?
                        <div className="script-container">
                            <div className="script-wrapper">
                                {/* Render boxes dynamically from scriptData */}
                                {scriptData.map((content, index) => (
                                    <div key={index} className="script-box">
                                        <div className="script-icon">
                                            <img src={content.image} alt={content.title} />
                                        </div>
                                        <div className="script-content">
                                            <h4 className="script-title">{content.title}</h4>
                                            <p className="script-descp">{content.description}</p>
                                        </div>
                                        <div className="script-create-btn" onClick={() => handleEdit(content)}>
                                            <a>Create <i class="ri-arrow-right-line"></i></a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        <TextEditor content={selectedContent} />  
                    }
                </section>
            )}
        </body>
        </>
    );
};

export default Dashboard;
