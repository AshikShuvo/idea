import React from 'react'
import '../customcss/login.css'

const LoginPage = () => {
    return (
        <div>
             <div class="full-screen-container">
                <div class="login-container">
                    <h3 class="login-title">Welcome</h3>
                    <form>
                        <div class="input-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div class="input-group">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <button type="submit" class="login-button">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage