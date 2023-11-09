import { Reason } from "../Reason/Reason";
import style from '../CardSection/CardSection.module.css';

export function WhyUs({paddingTop, headingText, dataBase}) {
    return(
        <section style={{paddingTop}} className={style.card_section}>
            <div style={{display:"flex", justifyContent:"center"}}><h1 style={{width:"492px", textAlign:"center"}} className={style.section_title}>{headingText}</h1></div>
            <div className={style.card_container}>
                {dataBase.map((content, index) =>(
                    <Reason key={index} {...content}/>
                ))}
            </div>
        </section>
    )
}