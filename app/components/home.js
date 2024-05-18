'use client'
import axios from "axios";
import { useEffect,useState } from "react";
import Link from "next/link";

const HomePage = () => {
const [posts,setPosts]=useState([])
const[isLoading,setLoading]=useState(true)
useEffect (()=>{
    try {
    const getData = async () =>{
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);  
    setPosts(data);
    };
    getData();
    } catch (error){
        console.log(error)
    } finally {
        setLoading(false);
    }
   
},[]);


    return(
<>
{
    isLoading ? "Loading..." : posts.map((a)=>(
        <div key ={a.id}>
<Link href={`./posts/${a.id}`}>{a.title}</Link>
        </div>
    ))
}
</>
    )
};
export default HomePage;