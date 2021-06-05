import React, { useState } from 'react'
import '../customcss/login.css'

const LoginPage = () => {
    const [inputs,setInputs]=useState({
        email:'',
        password:''
    });
    const [error,setError]=useState({
        email:{
            isNotAnEmail:false,
        },
        password:{
            isEmpty:false
        }
    });
    const validateEmail=(e)=>{
        const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!regex.test(String(e.target.value).toLowerCase())){
            setError({
                ...error,
                email:{
                    ...error.email,
                    isNotAnEmail:true
                }
            })
        }
        if(regex.test(String(e.target.value).toLowerCase())){
            setError({
                ...error,
                email:{
                    ...error.email,
                    isNotAnEmail:false
                }
            })
        }
    }
    const validatePassword=(e)=>{
        if(!e.target.value){
            setError({
                ...error,
                password:{
                    ...error.password,
                    isEmpty:true
                }
            })
        }
        if(e.target.value){
            setError({
                ...error,
                password:{
                    ...error.password,
                    isEmpty:false
                }
            })
        }
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const cr=`${inputs.email},${inputs.password}`
        alert(cr)
    }
    return (
        <div>
             <div class="full-screen-container">
                <div class="login-container">
                    <h3 class="login-title">Welcome</h3>
                    <form >
                        <div class="input-group">
                            <label>Email</label>
                            <input type="email" onBlur={e=>validateEmail(e)} value={inputs.email} onChange={e=>setInputs({...inputs,email:e.target.value})}/>
                            {
                                error.email.isEmpty&&<span style={{color:'red'}}>Email is Required</span>
                            }
                            {
                                error.email.isNotAnEmail&&<span style={{color:'red'}}>You Must Provide an Valid Email</span>
                            }
                        </div>
                        <div class="input-group">
                            <label>Password</label>
                            <input type="password" onBlur={e=>validatePassword(e)} value={inputs.password} onChange={e=>setInputs({...inputs,password:e.target.value})}/>
                            {
                                error.password.isEmpty&&<span style={{color:'red'}}>Password is Required</span>
                            }
                        </div> 
                        <button onClick={e=>submitHandler(e)} class="login-button" >Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
