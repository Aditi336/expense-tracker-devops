import Link from "next/link"
 const Notfound=async()=>{
    return(
        <>
        <h2>This page is not found</h2>
        <Link href="/">Go back Home</Link>
        </>
    )
}
export default  Notfound;