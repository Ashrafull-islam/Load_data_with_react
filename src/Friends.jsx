import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function(){
    const [Friends, setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setFriends(data));
    })
    return (
        <div>
            <h2>Friends :{Friends.length}</h2>
            {
                Friends.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}