import React from 'react'
import { Redirect } from 'react-router'

const ModelType = ({auth}) => {
    if(auth===false){
        return <Redirect to='/login'/>
    }
    return (
        <div>
            <h1>All model type</h1>
        </div>
    )
}

export default ModelType
