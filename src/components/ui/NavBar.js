import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const NavBar = ({auth,authHit,setAuthHit}) => {
    const history=useHistory()
    const makeLogout=()=>{
        localStorage.clear();
        setAuthHit(!authHit)
        history.push('/');

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">Idea</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 my-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    {auth && <li className="nav-item">
                        <Link className="nav-link" to="/models">Models</Link>
                    </li>}
                    {!auth && <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>}
                </ul>
                {auth&& <button className="btn btn-danger" onClick={()=>makeLogout()}>Logout</button>}
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
       </nav>
    )
}

export default NavBar
