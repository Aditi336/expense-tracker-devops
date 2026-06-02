import { useState } from "react"

const Counter=()=>{
    const [num,setnum]=useState(0);
    const handleIncrease=()=>{
        setnum(
            (num)=>num+1
        )
    }
    return(
        <>
        <button onClick={handleIncrease}>+{num}</button>
        </>
    )
}
export default Counter