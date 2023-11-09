import style from '../Italy.module.css'
import StatisticData from '../database/StatisticData'


export function ItalyBg() {
    return(
        <section className={style.italybg_section}>
            <div className={style.bg_placeholder}>
                <div className={style.heading_text}>
                    <h1>Italy</h1>
                    <p>Trips you couldn't plan, even if you wanted to.</p>
                    <button>Create a trip</button>
                </div>
                <div className={style.statistics}>
                    {StatisticData.map((content, index)=>(
                        <Statistics key={index} {...content}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
function Statistics({image, heading, firstText, secondText}) {
    return(
        <div className={style.statistics_frame}>
            <img src={image} alt="" />
            <div className={style.frame_text}>
                <h3>{heading}</h3>
                <p>{firstText}</p>
                <p>{secondText}</p>
            </div>
        </div>
    )
}