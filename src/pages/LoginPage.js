import axios from 'axios';
import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import '../customcss/login.css'

const LoginPage = ({isAuthenticated ,authHit,setAuthHit}) => {
    const [inputs,setInputs]=useState({
        email:'',
        password:''
    });
    const [httpError,setHttpError]=useState({
        error404:false,
        error401:false
    })
    const [error,setError]=useState({
        email:{
            isNotAnEmail:false,
        },
        password:{
            isEmpty:false
        }
    });
    const history=useHistory();
    if(isAuthenticated){
        return <Redirect to="/"/>
    }


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
        const body={
            email:inputs.email,
            password:inputs.password
        };
        axios.post(`${process.env.REACT_APP_BASE_API}/login`,body)
        .then(response=>{
           
            localStorage.setItem("w_auth", JSON.stringify(response.data));
            setHttpError({...httpError,error404:false,error401:false})
            setAuthHit(!authHit)
            history.push('/')
          
        }).catch(error=>{
            if(error.response.status===404){
                setHttpError({...httpError,error404:true})
            }else if(error.response.status===401){
                setHttpError({...httpError,error401:true})
            }
            console.log(error.response.status)
        })

    }
    return (
        <div>
             <div className="full-screen-container">
                <div className="login-container">
                    <h3 className="login-title">Welcome</h3>
                    {(httpError.error401||httpError.error404)&&<span style={{color:'red'}}>Credential does not match</span>}
                    <form >
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" onBlur={e=>validateEmail(e)} value={inputs.email} onChange={e=>setInputs({...inputs,email:e.target.value})}/>
                            {
                                error.email.isEmpty&&<span style={{color:'red'}}>Email is Required</span>
                            }
                            {
                                error.email.isNotAnEmail&&<span style={{color:'red'}}>You Must Provide an Valid Email</span>
                            }
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" onBlur={e=>validatePassword(e)} value={inputs.password} onChange={e=>setInputs({...inputs,password:e.target.value})}/>
                            {
                                error.password.isEmpty&&<span style={{color:'red'}}>Password is Required</span>
                            }
                        </div> 
                        <button onClick={e=>submitHandler(e)} className="login-button" >Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
