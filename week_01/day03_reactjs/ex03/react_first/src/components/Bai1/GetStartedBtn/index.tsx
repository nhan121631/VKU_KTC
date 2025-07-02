import { MoveRight } from "lucide-react"
import styles from "./GetStartedBtn.module.css"

const GetStaticButton = ()=>{
    return(
        <button className={styles.button}><span className={styles.title}>Get Started </span><MoveRight className={styles.icon}/></button>
    )
}
export default GetStaticButton