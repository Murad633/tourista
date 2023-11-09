import google from '../assets/google.svg'
import apple from '../assets/apple.svg'
import facebook from '../assets/facebook.svg'
import style from '../SignIn.module.css'
export function SocialMedia() {
    return(
        <div className={style.social_section}>
            <p>or use one of this</p>
            <div className={style.media_icon}>
                <div><img src={google} alt="" /></div>
                <div><img src={apple} alt="" /></div>
                <div><img src={facebook} alt="" /></div>
            </div>
        </div>
    )
}