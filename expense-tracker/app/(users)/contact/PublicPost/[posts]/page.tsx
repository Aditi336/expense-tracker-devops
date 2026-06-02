"use client";
import {use} from 'react';
import { useParams } from "next/navigation";
const Posts=(props:any)=>{
    const code=use(props.params);
    return(
        <>
        <h2>Client post id = {code.posts}</h2>
        </>
    )
}
export default Posts;