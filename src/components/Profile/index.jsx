import styles from "../Profile/style.module.css"
import Title from "../Profile/Title/index"
import button from "./Title/style.module.css"
import ProfileSection from "../Profile/ProfileSection/index"
import LinkButton from "../LinkButton/index"
import { useState } from "react"



export default function Profile(props){
    
    const [followText, setFollowText] = useState("seguir")

    function followClick(){
            alert("Você esta seguindo")
            setFollowText(".a seguir")

        }
    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button className={button.follow} 
                onClick={followClick}
                >
                {followText}
                </button>
            </Title>
                <ProfileSection>{props.bio}</ProfileSection>
                <ProfileSection>{props.phone}</ProfileSection>
                <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection
            className={styles.links}
            id='links-section'
            aria-label="social-links"
            data-test="some values"
            >
                    <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                    <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                    <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
           
        </div>
    )
}