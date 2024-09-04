import React, { useEffect, useState } from 'react'
import company from './materials/live-job-high-resolution-logo.png'
import profilephoto from './materials/profile-photo.jpg'
import './componentsCss/userhomepage.css'
import joblogo from './materials/filemaker.svg'
import money from './materials/money-icon.png'
import experience from './materials/experience-icon.png'
import duration from './materials/duration-icon.png'
import editIcon from './materials/edit-icon.png'
import { useNavigate } from 'react-router-dom'
export default function UserHomepage() {
    const navigate = useNavigate();
    const postings = [];
    for(let i=0;i<8;i++){
        postings.push(<div className="userhomepage-each-job-box">
            <div className="userhomepage-eachjob-img">
                <img src={joblogo} alt="" />
            </div>
            <div className="userhomepage-eachjob-content">
                <div className="userhomepgae-eachjob-title">Web Developer Intern</div>
                <div className="userhomepage-eachjob-details">
                    <div className="userhomepage-eachjob-eachdetail">
                        <img src={money} alt="" />
                        10000/month
                    </div>
                    <div className="userhomepage-eachjob-eachdetail">
                        <img src={experience} alt="" />
                        0-2 yrs</div>
                    <div className="userhomepage-eachjob-eachdetail">
                        <img src={duration} alt="" />
                        3-4 months
                    </div>
                </div>
                <div className="userhomepage-eachjob-skills">
                    Skills: HTML CSS JavaScript
                </div>
            </div>
            <div className="userhomepage-eachjob-apply">Apply</div>
        </div>);
    }
    const [jobs, setjobs] = useState([]);
    const loadjobs = async () => {
        await fetch("https://randomuser.me/api/").then(async (e) => {
            const data = await e.json();
            setjobs(data.results);
            console.log(data.results);

        }).catch((e) => {
            console.log("error is -> " + e);
        })
    }
    useEffect(() => {
        loadjobs();
    }, [])
    return (
        <div className='userhomepage-main'>
            <div className="userhomepage-inner">
                <div className="userhomepage-profile">
                    <div className="userhomepage-profile-livejoblogo">
                        <img src={company} alt="" className='userhomepage-img-logo' onClick={()=>{navigate('/')}} />
                    </div>
                    <div className="userhomepage-profile-area">
                        <div className="userhomepage-section-declare">
                            Profile Section 
                            <span onClick={()=>{navigate('/signup')}}>edit<img src={editIcon} alt="" /></span>
                            
                        </div>
                        <div className="userhomepage-profile-image" >
                            <img src={profilephoto} alt="" />
                        </div>
                        <div className="userhomepage-profile-content">
                            <div className="userhomepage-profile-content-set">
                                <span className="userhomepage-profile-content-header">
                                    Name:
                                </span>
                                Arnav Garg
                            </div>
                            <div className="userhomepage-profile-content-set">
                                <span className="userhomepage-profile-content-header">
                                    Date of Birth:
                                </span>
                                14-08-2004
                            </div>
                            <div className="userhomepage-profile-content-set">
                                <span className="userhomepage-profile-content-header">
                                    State:
                                </span>
                                Uttar Pradesh
                            </div>
                            <div className="userhomepage-profile-content-set">
                                <span className="userhomepage-profile-content-header">
                                    Education:
                                </span>
                                Harcourt Butler Technical University
                            </div>
                            <div className="userhomepage-profile-content-set">
                                <span className="userhomepage-profile-content-header">
                                    Technical skills:
                                </span>
                                MERN ,HTML ,CSS ,JS
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userhompage-jobs-section">
                    <div className="userhomepage-jobs-section-filter">
                        <input type="text" className="userhomepage-jobs-search-input" placeholder='search jobs' />
                        <button className="userhomepage-jobs-filter-buttons">Search</button>
                        <button className="userhomepage-jobs-filter-buttons">Work Type</button>
                        <button className="userhomepage-jobs-filter-buttons">Experience</button>
                        <button className="userhomepage-jobs-filter-buttons">Location</button>
                    </div>
                    <div className="userhomepage-jobs-section-list">
                        {postings}
                    </div>
                </div>
                {/* <div className="userhomepage-globalchat">

                </div> */}
            </div>
        </div>
    )
}
