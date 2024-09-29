import React, { useState } from "react";
import Login from '../../assets/images/yt_login.png';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LoginPage = () =>{
    const [workEmail, setWorkEmail] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate('');


    const handleLogin = (e) =>{
        if(workEmail != '' && password != ''){
            const data = {
                workEmail: workEmail,
                password: password
            };
            axios.post('http://localhost:8181/user/auth', data)
            .then(function(response){
                if(response.data.message === 'Login Successful'){
                    toast.success(response.data.message,{
                        position: "top-right",
                        autoClose: 5000,
                    });
                    sessionStorage.setItem('email', workEmail);
                    setTimeout(()=>{
                        nav('/home');
                    },5005);
                }else{
                    toast.error(response.data.message,{
                        position: "top-right",
                        autoClose: 5000,
                    });
                }
                
            }).catch(function(error){
                if(error.response.status === 409){
                    toast.warn(error.response.data.error,{
                        position: "top-right",
                        autoClose: 5000,
                    });
                    
                }
            });

            setWorkEmail('');
            setPassword('');
        }else{
            toast.error("All feilds must be filled",{
                position: "top-right",
                autoClose: 5000,
            });
        };
    };

    return(
        <>
            <ToastContainer/>
            <section className="login-section bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex items-center justify-center rounded-2xl shadow-lg max-w-3xl p-5">
                    <div className="sm:w-1/2 px-16">
                        <h2 className="font-bold text-2xl text-[#3e57da]">Welcome Back...!</h2>
                        <p className="text-sm mt-4 text-[#AAAAAA]">Use your <span className="font-bold text-[#0d0f2c]">work email</span> for better experience</p>

                        <form className="flex flex-col gap-4">
                            <input type="email" name="email" placeholder="Work Email" className="p-3 mt-8 rounded-xl border ttext-[#0d0f2c] w-full" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)}/>
                            <input type="password" name="password" placeholder="Password" className="p-3 mt-2 rounded-xl border ttext-[#0d0f2c] w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <div className="bg-[#3e57da] rounded-xl text-[#ffffff] py-2 text-center cursor-pointer" onClick={handleLogin}>Login</div>
                            <p className="mt-1 text-xs border-none  text-center cursor-pointer text-[#AAAAAA] underline hover:text-[#0d0f2c]">forgot password ?</p>
                        </form>
                        <div className="mt-10 grid grid-cols-3 items-center text-[#0d0f2c]">
                            <hr className="border-[#AAAAAA]"/>
                            <p className="text-center text-sm">or</p>
                            <hr className="border-[#AAAAAA]"/>
                        </div>
                        <button className="bg-[#ffffff] border py-2 w-full rounded-xl mt-5 text-sm hover:bg-[#3e57da] hover:text-[#ffffff]"><i class="ri-google-fill"></i> Continue with Google</button>
                       
                    </div>
                    {/* Image */}
                    <div className="sm:block hidden w-1/2">
                        <img src={Login} alt=""  className="rounded-2xl"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginPage;