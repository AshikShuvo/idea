import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">Idea</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 my-lg-0">
                    <li className="nav-item active">
                        <div className="nav-link">Home <span className="sr-only">(current)</span></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Link</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link disabled">Disabled</div>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
       </nav>
    )
}

export default NavBar
