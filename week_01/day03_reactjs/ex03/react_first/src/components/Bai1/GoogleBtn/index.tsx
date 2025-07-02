import { Globe } from "lucide-react"
import styles from "./Google.module.css"

const GoogleButton = ()=>{
    return(
        <button className={styles.button}><Globe className={styles.icon}/><span className={styles.title}>Continue with Google </span></button>
    )
}
export default GoogleButton