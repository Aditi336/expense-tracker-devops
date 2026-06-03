import Link from "next/link"

export const Notfound=async()=>{
    return(
        <>
        <h2>This page is not found</h2>
        <Link href="/">Go back Home</Link>
        </>
    )
}