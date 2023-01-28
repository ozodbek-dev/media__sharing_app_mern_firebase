export const config  = (type)=>{
  if(type==="basic"){
    return{
      headers:{
        "Content-Type":"application/json"
      }
    }
  }
  else{
    return{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
  }
}