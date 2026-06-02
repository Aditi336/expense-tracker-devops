import styles from "./contact_css.module.css"
import Image from "next/image";
import cpp_image from "@/public/cpp_image.jpg"
import { title } from "process";
export const metadata={
    title:"Contact",
    description:"this is my contact page"
};
const Contact=()=>{
    return(
        <>
        <div className={styles.contactDiv}>
            <div className={styles.contactCard}>
                <Image src="/cpp_image.jpg" alt="c++" width={100} height={100} className={styles.profileImage}/>
                c++</div>
            <div className={styles.contactCard}>
                <Image src={cpp_image} alt="c++" fill={true} priority={false} placeholder="blur"  blurDataURL=" "/>
                python</div>
            <div className={styles.contactCard}>java</div>
        </div>
        </>
    )
}
export default Contact;