import styles from "./contact_css.module.css"
import Image from "next/image";
const Contact=()=>{
    return(
        <>
        <div className={styles.contactDiv}>
            <div className={styles.contactCard}>
                <Image src="/c++_image.jpg" alt="c++" width={100} height={100}/>
                c++</div>
            <div className={styles.contactCard}>python</div>
            <div className={styles.contactCard}>java</div>
        </div>
        </>
    )
}
export default Contact;