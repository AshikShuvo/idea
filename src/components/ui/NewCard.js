import React from 'react'
import "../../customcss/card.css"
const NewCard = ({data}) => {
    const {Brand,DisplayName,Model}=data

    return (
        <div className="card__container " >
            <div class="go">
            <h3>{DisplayName}</h3>
                <h4>{Brand}</h4>
                
                {Model&&<span>{Model}</span>}
            </div>
        </div>
    )
}

export default NewCard
