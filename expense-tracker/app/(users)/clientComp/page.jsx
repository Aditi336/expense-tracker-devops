"use client";
import { useState,useEffect } from "react";
import Counter from "./Counter";
const URL = "https://jsonplaceholder.typicode.com/posts";
import styles from "./clientComp.module.css";

const clientComp=(params)=>{
    const [postData,setpostData]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch(URL);
            const data=await res.json();

            setpostData(data);
            // console.log(data);
            return data;
        }
        fetchData();
    },[])

    return(
        <>
        <h1>Client Component</h1>
        <button className={styles.ClientButton} onClick={()=>alert("hi")}>
            click me
        </button>
        <Counter/>
        <ul>
           {
            postData.map((curElem,index)=>{
                return <li key={index}>{curElem.body}</li>
            })
           }
        </ul>
        </>
    )
}
export default clientComp;