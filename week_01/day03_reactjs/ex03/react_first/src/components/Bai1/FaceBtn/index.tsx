import { FacebookIcon } from "lucide-react"
import styles from "./Facebook.module.css"

const FacebookButton = ()=>{
    return(
        <button className={styles.button}><FacebookIcon className={styles.icon}/><span className={styles.title}>Continue with FaceBook </span></button>
    )
}
export default FacebookButton