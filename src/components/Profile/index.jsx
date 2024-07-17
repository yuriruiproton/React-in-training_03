import styles from "../Profile/style.module.css"
import Title from "../Profile/Title/index"
import button from "./Title/style.module.css"
import ProfileSection from "../Profile/ProfileSection/index"
import LinkButton from "../LinkButton/index"


export default function Profile(props){
    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button className={button.follow}>seguir</button>
            </Title>
                <ProfileSection>{props.bio}</ProfileSection>
                <ProfileSection>{props.phone}</ProfileSection>
                <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>
                <div className={styles.links}>
                    <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                    <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                    <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
                </div>
            </ProfileSection>
           
        </div>
    )
}