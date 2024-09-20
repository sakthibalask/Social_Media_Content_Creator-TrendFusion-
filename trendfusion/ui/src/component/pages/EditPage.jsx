import React, { useRef, useState } from "react";
import '../../assets/css/EditPage.css';
import '../../assets/css/colors/colors.css';
import YTLOGO from '../../assets/images/yt_ytlogo.png';
import YTINSTA from '../../assets/images/yt_insta.png';
import axios from 'axios';

const TextEditor = () => {
    const outputRef = useRef(null);
    const [topic, setTopic] = useState('');
    const [script, setScript] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleCommand = (cmd) => {
        if (cmd === 'createLink') {
            const url = prompt('Enter the link here:', 'http://');
            document.execCommand(cmd, false, url);
        } else {
            document.execCommand(cmd, false, null);
        }
    };

    const handleGenerate = async() =>{
        setScript('');
        const data = {
            'topic': topic
        }
        // console.log(data);
        setIsSent(true);
        const ytresponse = await axios.post('http://localhost:8181/content/extractor/yt', data);
        const webresponse = await axios.post('http://localhost:8181/content/extractor/web', data);
        // console.log(webcontext);
        const yt_data ={
            'ytcontext' : ytresponse.data['yt_context'],
            'webcontext': webresponse.data['web_context']
        } 
        const scriptData = await axios.post('http://localhost:8181/script/generator', yt_data)
        setScript(scriptData.data['Script']);
        setIsSent(false);
        setTopic('');
    };

    return (
        <>  
            <section className="edit-main">
                <div className="edit-left">
                    <div className="edit-details">
                        <img src={YTLOGO} alt="" />
                        <div className="edit-content">
                            <h2 className="edit-title">Write Script for YouTube</h2>
                            <p className="edit-descp">AI Model to generate a script based on your topic.</p>
                        </div>
                        <div className="edit-input-container">
                            <h3 className="edit-input-label">Enter the topic for your YouTube video</h3>
                            <textarea placeholder="Your topic goes here" className="edit-textarea" maxLength={100} value={topic}  onChange={(e) => setTopic(e.target.value)}></textarea>
                            <p className="edit-maxwords">Note: Max 100 Words</p>
                        </div>
                        <button className="edit-generate-btn" onClick={()=>handleGenerate()} disabled={isSent}>Generate Script</button>
                    </div>
                </div>
                <div className="edit-right">
                    <div className="edit-right-header">
                        <h4 className="edit-header-title">Your Script</h4>
                        <div className="edit-copy-btn">
                            <button className="edit-cpy-btn">
                                <i className="ri-file-copy-line"></i> Copy
                            </button>
                        </div>
                    </div>
                    <div className="edit-right-container">
                        <div className="edit-toolbar">
                            <ul className="edit-tool-list">
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('justifyLeft')} className="edit-tool-btn">
                                        <i className="ri-align-left"></i>
                                    </button>
                                </li>
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('justifyCenter')} className="edit-tool-btn">
                                        <i className="ri-align-center"></i>
                                    </button>
                                </li>
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('justifyRight')} className="edit-tool-btn">
                                        <i className="ri-align-right"></i>
                                    </button>
                                </li>
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('bold')} className="edit-tool-btn">
                                        <i className="ri-bold"></i>
                                    </button>
                                </li>
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('italic')} className="edit-tool-btn">
                                        <i className="ri-italic"></i>
                                    </button>
                                </li>
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('underline')} className="edit-tool-btn">
                                        <i className="ri-underline"></i>
                                    </button>
                                </li>
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('insertOrderedList')} className="edit-tool-btn">
                                        <i className="ri-list-ordered"></i>
                                    </button>
                                </li>
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('insertUnorderedList')} className="edit-tool-btn">
                                        <i className="ri-list-unordered"></i>
                                    </button>
                                </li>
                                <li className="edit-tool">
                                    <button type="button" onClick={() => handleCommand('createLink')} className="edit-tool-btn">
                                        <i className="ri-link"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="edit-output" id="edit-output" ref={outputRef} contentEditable="true" >{script}</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TextEditor;
