import React from 'react'
import "../../customcss/card.css"
const Card = ({data,fetchAndShowModalData}) => {
    const {BrandId,Name,Comment,Description}=data

    return (
        <div className="card__container " onClick={()=>fetchAndShowModalData(BrandId,Name)}>
            <div class="go">
                <h3>{Name}</h3>
                <h1>{BrandId}</h1>
                {Comment&&<p>{Comment}</p>}
                {Description&&<span>{Description}</span>}
            </div>
        </div>
    )
}

export default Card
