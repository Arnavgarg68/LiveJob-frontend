import React from 'react'
import { useForm } from 'react-hook-form'
import './componentsCss/signupform.css'
import data from './materials/countries+states.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function SignupForm() {
    let states = data.find((c) => c.name === 'India');
    states = states.states;
    const Submit = (e) => {
        console.log(e);
        toast.success("Form submitted successfully")
    }
    const onerrors = (err) => {
        const firsterr = Object.keys(err)[0];
        console.log(err[firsterr])
        toast.error(err[firsterr]?.message || 'An error occurred');
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className='signupform-main'>
            <ToastContainer />
            <div className="signupform-inner">
                <h1 className="singupform-h1">
                    Add your details
                </h1>
                <div className="singupform-formbox">
                    <form onSubmit={handleSubmit(Submit, onerrors)} className="signupform-form">
                        <section>
                            <div className="signupform-input-set">
                                <label htmlFor="First name" className="signupform-input-label">First name <span className="signupform-star">*</span></label>
                                <input type="text" className="signupform-inputfield" id='First name' autoFocus {...register("firstName", { required: "First name is required" , validate: value => value.trim() !== '' || 'Name cannot be just spaces'})} />
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="middleName" className="signupform-input-label">Middle name </label>
                                <input type="text" className="signupform-inputfield" id='middleName' {...register("middleName")} />
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="lastName" className="signupform-input-label">Last name<span className="signupform-star">*</span></label>
                                <input type="text" className="signupform-inputfield" id='lastName' {...register("lastName", { required: "Last name is required" })} />
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="DOB" className="signupform-input-label">Date of Birth<span className="signupform-star">*</span></label>
                                <input type="date" className="signupform-inputfield" id='DOB' {...register("DOB", { required: "Date of Birth is required" })} />
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="bloodGroup" className="signupform-input-label">Blood Group</label>
                                <select type="text" className="signupform-inputfield" id='bloodGroup' {...register("bloodGroup",)}>
                                    <option value=""></option>
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="O+">O+</option>
                                    <option value="A-">A-</option>
                                    <option value="B-">B-</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O-">O-</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                        </section>
                        <section>
                            <div className="signupform-input-set">
                                <label htmlFor="state" className="signupform-input-label">State<span className="signupform-star">*</span></label>
                                <select type="text" className="signupform-inputfield" id='state'{...register("state", { required: "State is required" })}>
                                    <option></option>
                                    {
                                        states.map((state, idx) =>
                                        (
                                            <option value={state.name} key={idx}>{state.name}</option>
                                        )
                                        )
                                    }
                                </select>
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="city" className="signupform-input-label">City<span className="signupform-star">*</span></label>
                                <input type="text" className="signupform-inputfield" id='city' {...register('city', { required: "City is required" })} />
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="address" className="signupform-input-label">Address<span className="signupform-star">*</span></label>
                                <input type="text" autoComplete='on' className="signupform-inputfield" id='address' {...register("address", { required: "Address is required" })} />
                            </div>
                        </section>
                        <section>
                            <div className="signupform-input-set">
                                <label htmlFor="phoneNumber" className="signupform-input-label">Phone number<span className="signupform-star">*</span></label>
                                <input type="phone" className="signupform-inputfield" id='phoneNumber' {...register("phoneNumber", { required: "Phone number is required" ,minLength:{value:10,message:"Invalid Phone number"},maxLength:{value:10,message:"Invalid phone number"}})} />
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="email" className="signupform-input-label">Email<span className="signupform-star">*</span></label>
                                <input type="email" autoComplete='on' className="signupform-inputfield" id='email' {...register("email", { required: "Email is required" })} />
                            </div>
                        </section>
                        <section>
                            <div className="signupform-input-set">
                                <label htmlFor="education" className="signupform-input-label">Education</label>
                                <button className="signupform-inputfield-button" id='education' >Add education</button>
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="experience" className="signupform-input-label">Experience</label>
                                <button className="signupform-inputfield-button" id='experience' >Add experience</button>
                            </div>
                        </section>
                        <section>
                            <div className="signupform-input-set">
                                <label htmlFor="prefferedUsername" className="signupform-input-label">Preffered Username</label>
                                <input type="text" className="signupform-inputfield" id='prefferedUsername' {...register('prefferedUsername')} />
                            </div>
                            <div className="signupform-input-set">
                                <label htmlFor="resume" className="signupform-input-label">Resume</label>
                                <input type="file" id='resume' className="signupform-inputfield" accept='.pdf' {...register("resume")} />
                            </div>
                        </section>
                        {/* <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div> */}
                        <section>
                            <button type='submit' className='signupform-submit-button'>Submit</button>
                        </section>
                    </form>
                </div>
            </div>

        </div>
    )
}
