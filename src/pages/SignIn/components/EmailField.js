import style from '../SignIn.module.css'
export function EmailField() {
    return(
        <div>
            <label className={style.label} htmlFor="email">Email</label>
            <input className={style.input_email} placeholder='someone@example.com' type="email" name="email" id="email" />
        </div>
    )
}