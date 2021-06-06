import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router'
import NewCard from '../components/ui/NewCard';
import Preloader from '../components/ui/Preloader';

const SubModelType = ({auth}) => {
    const [data,setData]=useState([])
    const [showLoader,setShowLoader]=useState(false);
    const {brandId,name}=useParams();
    const credentials=JSON.parse(localStorage.getItem('w_auth'));
    useEffect(()=>{
        if(credentials)
        fetchData();
    },[])
    const fetchData=()=>{
        setShowLoader(true)
     axios.get(`${process.env.REACT_APP_BASE_API}/overview/modeldata/${brandId}/${name}`,{
         headers:{
             authorization:credentials.access_token,
         }
     },credentials).then(res=>{
        
         setData(res.data);
         setShowLoader(false)
     }).catch(err=>{
         setShowLoader(false)
         console.log(err)
     })
    }
    if(auth===false){
        return <Redirect to='/login'/>
    }
    return (
        <>
        {showLoader&& <Preloader/>}
        <div className="container-fluid">
            {
                data.map(item=><NewCard data={item} key={item.id}/>)
            }
            
        </div>
        </>
    )
}

export default SubModelType
