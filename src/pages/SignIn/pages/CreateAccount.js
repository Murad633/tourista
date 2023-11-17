import style from '../SignIn.module.css'
import { PlaneBg } from '../components/PlaneBg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { EmailField } from '../components/EmailField'
import { SocialMedia } from '../components/SocialMedia'

export function CreateAccount() {
    const navigate = useNavigate();
    return(
        <>
            <div className={style.container}>
                <PlaneBg />
                <div style={{justifyContent: "space-between"}}  className={style.login_container}>
                    <div className={style.header_wrapper}>
                        <header className={style.login_header}>
                            <Link to="/" ><img src='/assets/Logo.svg' alt="" /></Link>
                        </header>
                        <Link onClick={()=>{navigate(-1)}}><FontAwesomeIcon className={style.abs_left} icon={faChevronLeft} /></Link>
                    </div>
                    <div className={style.form_section}>
                        <h2 style={{marginBottom: "36px"}} className={style.heading2}>Create an account to start trip planning</h2>
                        <EmailField />
                        <button className={style.signin_btn} style={{ marginTop: "24px" }} >Start trip planning</button>
                    </div>
                    <SocialMedia />
                    <footer className={style.footer_section}>
                        <p>By creating an account, you agree to elsewhere's Terms of Use and Privacy Policy.</p>
                    </footer>
                </div>
            </div>
        </>
    )
}