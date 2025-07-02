import { AppleIcon } from "lucide-react"
import styles from "./AppleBtn.module.css"

const AppleButton = ()=>{
    return(
        <button className={styles.button}><AppleIcon className={styles.icon}/><span className={styles.title}>Continue with Apple </span></button>
    )
}
export default AppleButton