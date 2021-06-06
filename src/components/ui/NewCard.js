import React from 'react'
import "../../customcss/card.css"
const NewCard = ({data}) => {
    const {Name,DisplayName,Description}=data

    return (
        <div className="card__container " >
            <div class="go">
                <h3>{Name}</h3>
                <h1>{DisplayName}</h1>
                {Description&&<span>{Description}</span>}
            </div>
        </div>
    )
}

export default NewCard
