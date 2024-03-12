import token from "../../token/token";
import {useState,useCallback} from 'react'


const useHttp = ()=>{
const [leads,setLeads] = useState([])    
const sendRequest = useCallback(async()=>{
    try{
        const response = await fetch('/apivite/api/v4/leads',{
            method:'GET',
            headers:{'Authorization':`Bearer ${token.access_token}`}
        })
        if(!response.ok){
            throw new Error('Fetching Failed')
        }
        const data = await response.json()
        setLeads(data._embedded.leads)
    }catch(e){
      console.log(e)
    }
},[])
return{
    sendRequest,
    leads
}
}



export default useHttp