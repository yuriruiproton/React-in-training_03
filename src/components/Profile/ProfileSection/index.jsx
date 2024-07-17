import styles from "../ProfileSection/style.module.css"

export default function ProfileSection(props){
    return(
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}