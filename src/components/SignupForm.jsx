import React from 'react'
import {useForm} from 'react-hook-form'
import './componentsCss/signupform.css'
export default function SignupForm() {
    const Submit = (e)=>{
        console.log(e);
    }
    const {register,handleSubmit,formState:{errors}} = useForm();
  return (
    <div className='signupform-main'>
        <div className="signupform-inner">
            <h1 className="singupform-h1">
                Add your details
            </h1>
            <div className="singupform-formbox">
                <form onSubmit={handleSubmit(Submit)} className="signupform-form">
                    <div className="signupform-input-set">
                        <label htmlFor="First name" className="signupform-input-label">First name <span className="signupform-star">*</span></label>
                        <input type="text" className="signupform-inputfield" id='First name' {...register("First name")}/>
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label">Middle name </label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
                    <div className="signupform-input-set">
                        <label htmlFor="" className="signupform-input-label"></label>
                        <input type="text" className="signupform-inputfield" />
                    </div>
            <button type='submit'>hello</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
