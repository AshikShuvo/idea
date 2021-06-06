import jwt_decode from "jwt-decode";
export  const isAuth=()=>{
    //it will check is any token stored in local storage
    //is the token valid
    //if all login credential matches then return true else false

    if(JSON.parse(localStorage.getItem('w_auth'))!==null){
        const token=JSON.parse(localStorage.getItem('w_auth')).access_token;
       
        const exp=jwt_decode(JSON.stringify(token)).exp*1000;
        if (Date.now() >= exp ) {
            return false;
        }
        return true;
    }
    return false;
}
