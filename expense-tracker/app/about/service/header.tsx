import Link from "next/link";
const Header=()=>{
    return(
        <>
       <header >
        <div >Expense</div>
            
         <ul >
            <li >
                <Link href="/">Homettt</Link>
            </li>
        </ul>
        
        </header>
        </>
    )
}
export default Header;