import { React, useEffect, useState ,useRef} from 'react'
import Logo from "./materials/live-job-high-resolution-logo.png"
import employee from "./materials/icons8-employee-100.png"
import company from "./materials/icons8-company-100.png"
import about from "./materials/icons8-about-100.png"
import background from "./materials/background-homapage.png"
import './componentsCss/homepage.css'

// images companies
import flipkart from "./materials/companies/flipkart.webp"
import linkedin from "./materials/companies/linkedin.png"
import tcs from "./materials/companies/TCS.png"
// import twitter from "./materials/companies/twitter.png"
import walmart from "./materials/companies/walmart.webp"
import samsung from "./materials/companies/Samsung.webp"
import zomato from "./materials/companies/zomato.png"
import uber from "./materials/companies/uber.png"
import boat from "./materials/companies/boat.webp"
import infosys from "./materials/companies/infosys.png"
import openai from "./materials/companies/openai.png"
import microsoft from "./materials/companies/microsoft.jpg"
import amazon from "./materials/companies/amazon.png"
import google from "./materials/companies/google.webp"
import wipro from "./materials/companies/wipro.png"
export default function Homepage() {
    const [login, setLogin] = useState(false);
    const [l, setL] = useState(false);
    const [s, setS] = useState(true);
    const [joke, setJoke] = useState("");
    const loginswitchnavbar = () => {
        setLogin(true);
    }
    const loginswitch = (eve) => {
        const outer = document.querySelector('.homepage-login-box');
        const inner = document.querySelector('.homepage-login-box-inner-1');
        if (outer.contains(eve.target) && !inner.contains(eve.target)) {
            setLogin(false);
        }
    }
    const switchlogin = () => {
        setL((e) => !e);
        setS((e) => !e);
    }
    const passwordshow = () => {
        const element = document.getElementById("password");
        element.type = 'text';
    }
    const passwordhide = () => {
        const element = document.getElementById("password");
        element.type = 'password';
    }
    // const loadQuote = async()=>{
    //     console.log("hit")
    //     try {
    //         const response = await fetch("https://api.api-ninjas.com/v1/jokes",{
    //             method:"GET",
    //             headers:{
    //                 "content-type":"application/json",
    //                 'X-Api-Key': 'sK7jt/zqnnq2hsgj+AQosQ==qUag6oj5lDLmmspe'
    //             }
    //         });
    //         if(!response.ok){
    //             return;
    //         }
    //         let quote = await response.json();
    //         quote=quote[0];
    //         console.log(quote)
    //         setJoke(quote.joke);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const logoscroll = () => {
    //     let track = document.querySelector('.homepage-slider-track');
    //     let slides = Array.from(track.children);
    //     let scrollspeed = "2px";
    //     track.style.transform = `translate{${scrollspeed}}`;
    //     if(track.getBoundingClientRect().left<= -slides[0].getBoundingClientRect().width){
    //         track.appendChild(slides[0]);
    //         slides = Array.from(track.children);
    //         track.style.transform = 'translateX{0px}';
    //     }
    //     requestAnimationFrame(logoscroll);
    // }
    
    const scrollSpeed = 0.7;
    const trackRef = useRef(null);
    const animationRef = useRef(null);
    useEffect(()=>{
        const track = trackRef.current;
        let position = 0;

        const scrollSlider = () => {
            position -= scrollSpeed;
            track.style.transform = `translateX(${position}px)`;

            // Get the first slide and its dimensions
            const firstSlide = track.firstChild;
            const firstSlideWidth = firstSlide.getBoundingClientRect().width;

            // Check if the first slide is out of view (completely scrolled out to the left)
            if (position <= -firstSlideWidth) {
                // Move the first slide to the end
                track.appendChild(firstSlide);

                // Adjust position to account for the moved slide
                position += firstSlideWidth;

                // Reset the transform to prevent any visible jump
                track.style.transform = `translateX(${position}px)`;
            }

            // Continue the animation
            animationRef.current = requestAnimationFrame(scrollSlider);
        };

        scrollSlider(); // Start the animation

        return () => {
            cancelAnimationFrame(animationRef.current); // Cleanup on unmount
        };
    },[scrollSpeed])
    return (
        <div id='homepage-main'>
            <div id="homepage-inner">
                <div className="homepage-navbar">
                    <div className="homepage-navbar-imageHandler">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="homepage-login-set">
                        <div className="homepage-login-signup" onClick={loginswitchnavbar}>
                            <div className="homepage-login-img">
                                <img src={employee} alt="" />
                            </div>
                            <div className="homepage-login-text">Login/Signup</div>
                        </div>
                        <div className="homepage-login-signup">
                            <div className="homepage-login-img">
                                <img src={company} alt="" />
                            </div>
                            <div className="homepage-login-text">Company Login</div>
                        </div>
                    </div>
                    <div className="homepage-navbar-aboutus">
                        <div className="homepage-login-signup">
                            <div className="homepage-login-img">
                                <img src={about} alt="" />
                            </div>
                            <div className="homepage-login-text">About us</div>
                        </div>
                    </div>
                </div>
                <div className="homepage-content">
                    <div className="homepage-content-set">
                        <div className="homepage-content-text">
                            "Live Job: Connect, grow, and discover new opportunities in real-time."
                        </div>
                        <div className="homepage-content-img">
                            <img src={background} alt="" />
                        </div>
                    </div>
                    <div className="homepage-companies">
                        <div className="homepage-slider">
                            <div className="homepage-slider-track" ref={trackRef}>
                                <div className="homepage-slide">
                                    <img src={flipkart} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={zomato} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={linkedin} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={tcs} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={wipro} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={walmart} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={samsung} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={uber} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={boat} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={infosys} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={openai} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={microsoft} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={amazon} alt="" />
                                </div>
                                <div className="homepage-slide">
                                    <img src={google} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {login && (<div className="homepage-login-box" onClick={loginswitch}>
                    {s && (<form className="homepage-login-box-inner-1">
                        <div className="homepage-login-input-set">
                            <label htmlFor="">Email or Phone number</label>
                            <input type="email" />
                        </div>
                        <div className="homepage-login-input-set">
                            <label htmlFor="">Password (6+ characters)</label>
                            <input type="password" id='password' onMouseOver={passwordshow} onMouseOut={passwordhide} />
                        </div>
                        <div className="homepage-login-agreement">
                            By clicking Agree & Join or Continue, you agree to the LiveJob User Agreement, Privacy Policy, and Cookie Policy.
                        </div>
                        <div className="homepage-login-button" >
                            Agree & SignUp
                        </div>
                        <hr className='homepage-hr' />
                        <div className="homepage-login-switch">
                            Already on LiveJob? <span onClick={switchlogin}>Login.</span>
                        </div>
                    </form>)}
                    {l && (<form className="homepage-login-box-inner-1">
                        <div className="homepage-login-input-set">
                            <label htmlFor="">Email or Phone number</label>
                            <input type="email" />
                        </div>
                        <div className="homepage-login-input-set">
                            <label htmlFor="">Password</label>
                            <input type="password" id='password' onMouseOver={passwordshow} onMouseOut={passwordhide} />
                        </div>
                        <div className="homepage-login-agreement">
                            {joke}
                        </div>
                        <div className="homepage-login-button" >
                            Login
                        </div>
                        <hr className='homepage-hr' />
                        <div className="homepage-login-switch">
                            New to LiveJob? <span onClick={switchlogin}>SignUp.</span>
                        </div>
                    </form>)}
                </div>)}
            </div>
        </div>
    )
}
