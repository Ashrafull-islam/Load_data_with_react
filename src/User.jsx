import { useEffect } from "react";
import { useState } from "react"

export default function User(){
    const [user, setUser]=useState([]);
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res=>res.json())
         .then(data=>setUser(data));
    
    },[])
return (
    <div>
    <h3>none can distroy it</h3>
    <h3>User: {user.length}</h3>
    </div>
)
}