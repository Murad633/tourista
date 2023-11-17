import { Link } from 'react-router-dom'
import style from '../SignIn.module.css'
export function SocialMedia() {
    return(
        <div className={style.social_section}>
            <p>or use one of this</p>
            <div className={style.media_icon}>
                <div><Link><img src='/assets/google.svg' alt="" /></Link></div>
                <div><Link><img src='/assets/apple.svg' alt="" /></Link></div>
                <div><Link><img src='/assets/facebook.svg' alt="" /></Link></div>
            </div>
        </div>
    )
}