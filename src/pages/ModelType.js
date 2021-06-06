import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import Card from '../components/ui/Card'
import Preloader from '../components/ui/Preloader';
const ModelType = ({auth}) => {
    const history=useHistory()
    const [modelType,setModelType]=useState([]);
    const [showLoader,setShowLoader]=useState(false);
    const credentials=JSON.parse(localStorage.getItem('w_auth'));
   
    useEffect(()=>{
        if(credentials)
        fetchModelTypeData();
    },[])
    const fetchModelTypeData=()=>{
        setShowLoader(true)
        axios.get(`${process.env.REACT_APP_BASE_API}/overview/modeltype`,{
            headers:{
                authorization:credentials.access_token,
            }
        },credentials).then(res=>{
            setModelType(res.data);
            setShowLoader(false)
        }).catch(err=>{
            setShowLoader(false)
            console.log(err)
        })
    }
   const fetchAndShowModalData=(brandId,name)=>{
    history.push(`/models/${brandId}/${name}`)
   }
    if(auth===false){
        return <Redirect to='/login'/>
    }

    return (

        <>
       
        {showLoader&& <Preloader/>}
        <div className="container-fluid">
            {
                modelType.map(item=><Card key={item.id} data={item} fetchAndShowModalData={fetchAndShowModalData}/>)
            }
        </div>
        </>
    )
}

export default ModelType
