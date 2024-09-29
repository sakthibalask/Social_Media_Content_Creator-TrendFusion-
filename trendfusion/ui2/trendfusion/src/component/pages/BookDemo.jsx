import React, { useEffect, useState } from "react";
import '../../assets/css/BookDemo.css';
import '../../assets/css/colors/colors.css';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const BookDemo = () =>{
    const [menuopen, setMenuOpen] = useState(false);
    const nav = useNavigate('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [workEmail, setWorkEmail] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [description, setDescription] = useState('');


    const handleBookDemo = () =>{
        if(firstName != '' && lastName != '' && workEmail != '' && contactInfo != '' && description != ''){
            const data = {
                firstName: firstName,
                lastName : lastName, 
                workEmail: workEmail,
                contactInfo: contactInfo
            };
            axios.post('http://localhost:8181/user/bookDemo', data)
            .then(function(response){
                toast.info(response.data.message,{
                    position: "top-right",
                    autoClose: 5000,
                });
                setTimeout(()=>{
                    nav('/welcome');
                },5005);
            })
            .catch(function(error){
                if(error.response.status === 409){
                    toast.warn(error.response.data.error,{
                        position: "top-right",
                        autoClose: 5000,
                    });
                    
                }
            });

            setFirstName('');
            setLastName('');
            setDescription('');
            setContactInfo('');
            setWorkEmail('');
        }else{
            toast.error("All feilds must be filled",{
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

    return(
        <>
          <div className="demo-body">
                <ToastContainer/>
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
                                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                <i class="ri-user-line"></i>
                            </div>
                            <div className="demo-field">
                                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                <i class="ri-user-line"></i>
                            </div>
                        </div>
                        <div className="demo-dlb-field">
                            <div className="demo-field">
                                <input type="text" placeholder="Work Email" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)}/>
                                <i class="ri-mail-line"></i>
                            </div>
                            <div className="demo-field">
                                <input type="text" placeholder="Mobile Number (with country code)" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)}/>
                                <i class="ri-phone-line"></i>
                            </div>
                        </div>
                        <div className="demo-message">
                            <textarea placeholder="Explain your work need..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            <i class="ri-information-line"></i>
                        </div>
                        <div className="demo-button-area">
                            <button onClick={handleBookDemo}>Book Demo <i class="ri-arrow-right-line"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BookDemo;