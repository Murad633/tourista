import style from '../SignIn.module.css'
import { PlaneBg } from '../components/PlaneBg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { EmailField } from '../components/EmailField'

export function ForgotPsw() {
    const navigate = useNavigate();
    return(
        <>
            <div className={style.container}>
                <PlaneBg />
                <div style={{justifyContent: "flex-start"}}  className={style.login_container}>
                    <div className={style.header_wrapper}>
                        <header className={style.login_header}>
                            <Link to="/" ><img src='/assets/Logo.svg' alt="" /></Link>
                        </header>
                        <Link onClick={()=>{navigate(-1)}}><FontAwesomeIcon className={style.abs_left} icon={faChevronLeft} /></Link>
                    </div>
                    <div className={style.form_section}>
                        <h2 className={style.heading2}>Looking to change your password?</h2>
                        <p className={style.alert_msg}>Enter your email below and we'll send you instructions on how to reset your password.</p>
                        <EmailField />
                        <button className={style.signin_btn} style={{ marginTop: "24px" }} >Reset my password</button>
                    </div>
                </div>
            </div>
        </>
    )
}