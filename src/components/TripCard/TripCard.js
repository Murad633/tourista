import style from './TripCard.module.css'
export function TripCard({image, title, upperText}) {
    return(
        <div className={style.trip_card}>
            <img src={image} alt="" />
            <div className={style.text_wrapper}>
                <h3 style={{display:  upperText === null ? "none"  : "" }}>{upperText}</h3>
                <p>{title}</p>
            </div>
        </div>
    )
}
