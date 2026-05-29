import Link from "next/link";
import styles from "./Header.module.css";
const Header=()=>{
    return(
        <>
       <header className={styles.header}>
        <div className={styles.headerNav}>Expense</div>
            
         <ul className={styles.headerUl}>
            <li >
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link  href="/about">about</Link>
            </li>
            <li>
                <Link  href="/contact">contact</Link>
            </li>
        </ul>
        
        </header>
        </>
    )
}
export default Header;