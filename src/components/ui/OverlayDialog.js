import React from 'react'
import '../../customcss/fullscreen.css'
const OverlayDialog = ({data,close}) => {
    return (
       
        <div id="owrap" className="show">
            <div id="ocontent">{
                data.map(it=><h3>hello</h3>)
            }</div>
            <div id="oclose" onClick={()=>close(false)}>X</div>
        </div>


    )
}

export default OverlayDialog
