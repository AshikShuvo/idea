import React from 'react'
import spinner from '../../img/spinner.gif';
import '../../customcss/overlay.css'
const Preloader = () => {
    return (
        <div className="modale opened" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-body">
                        <img
                            src={spinner}
                            style={{
                                width: "200px",
                                margin: "auto",
                                display: "block",
                              }}
                              alt='loading'
                        />
                    </div>
                </div>
            </div>
    )
}

export default Preloader
