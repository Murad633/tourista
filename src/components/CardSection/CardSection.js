// import { Card } from '../Card/Card'
import style from './CardSection.module.css'
export function CardSection({sectionTitle, dataBase, paddingTop, card}) {
    const CardComponent = card;
    return(
        <section style={{paddingTop}} className={style.card_section}>
            <h1 className={style.section_title}>{sectionTitle}</h1>
            <div className={style.card_container}>
                {dataBase.map((content, index) => (
                    <CardComponent key={index} {...content} />
                ))}
            </div>
        </section>
    )
}