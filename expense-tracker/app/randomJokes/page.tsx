"use client";
import { useState,useEffect } from "react";
import styles from "./features.module.css";
const Jokes=()=>{

interface JokeType{
    type:string;
    setup:string;
    punchline:string;
}

const URL = "https://official-joke-api.appspot.com/random_joke";
const [data,setdata]=useState<JokeType>({
    type:"",
    setup:"",
    punchline:""
});

  
const handleJokes=async()=>{
    const res=await fetch(URL);
    const jokedata=await res.json();
    // console.log(jokedata)
    setdata(jokedata);
}
useEffect(()=>{

handleJokes();

},[])
return(
    <>
    <div className={styles.Homediv}>
        <h1>Random Jokes</h1>
        <h3>
            Question:{data.setup}
        </h3>
        <h4>
            Answer:{data.punchline}
        </h4>

        <button onClick={handleJokes} className={styles.Homebutton}>Next</button>
    </div>
    </>
)
}
export default Jokes;