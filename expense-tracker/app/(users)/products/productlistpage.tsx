"use client";

import { useSearchParams } from "next/navigation";

const ProductList=()=>{
    const searched=useSearchParams();
    console.log("this is from the client side ",searched);
    const category=searched.get("category");
    const  page=searched.get("page")
    return(
        <>
        <h1>Client side</h1>
        <ul>
            <li>{category}</li>
            <li>{page}</li>
        </ul>
        </>
    )
}
export default ProductList;