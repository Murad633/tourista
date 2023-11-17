import style from './SignIn.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-regular';
import { useState } from 'react';
import { PlaneBg } from './components/PlaneBg';
import { EmailField } from './components/EmailField';
import { SocialMedia } from './components/SocialMedia';

export function SignIn() {
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return(
        <>
            <div className={style.container}>
                <PlaneBg />
                <div style={{justifyContent: "space-between"}} className={style.login_container}>
                    <header className={style.login_header}>
                        <Link to="/" ><img src='/assets/Logo.svg' alt="" /></Link>
                    </header>
                    <main className={style.main_section}>
                        <div className={style.form_section}>
                            <h2 className={style.heading2}>Sign in for your exciting journey</h2>
                            <form method='GET' action="/">
                                <EmailField />
                                <label className={style.label} htmlFor="password">Password</label>
                                <div className={style.relative_psw}>
                                    <input 
                                        className={style.input_psw}
                                        placeholder='•••••••••••' 
                                        type={ showPassword ? "text" : "password" }
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value)}
                                        name="password" 
                                        id="password" 
                                    />
                                    <FontAwesomeIcon 
                                        onClick={togglePasswordVisibility} 
                                        className={style.abs_icon} 
                                        icon={ showPassword ? faEyeSlash : faEye} 
                                    />
                                </div>
                                <Link to='/forgotpsw' className={style.forgot_psw}>Forgot password?</Link>
                                <input className={style.signin_btn} type="submit" value="Sign in" />
                            </form>
                        </div>
                        <SocialMedia />
                    </main>
                    <footer className={style.footer_section}>
                            <div><span>Don’t have an account?</span><Link to="/createaccount" className={style.list_item}>Create one for new adventure!</Link></div>
                    </footer>
                </div>
            </div>
        </>
    )
}