let is_ok=true
const FechData =(time,task)=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        if(is_ok){
            resolve(task)
        }else{
            reject("error")
        }
    },time)
    })
}

export default FechData