import style from './Reason.module.css'

export function Reason({img, title, reasonText}) {
    return(
        <div className={style.reason_card}>
            <img src={img} alt="" />
            <div>
                <p className={style.reason_card_title}>{title}</p>
                <p className={style.reason_card_text}>{reasonText}</p>
            </div>
        </div>
    )
}