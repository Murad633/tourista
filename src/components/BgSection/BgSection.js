import style from './BgSection.module.css'
export function BgSection({heading, title, bgImage}) {
    return(
        <section className={style.bg_section}>
            <div style={{background: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className={style.bg_placeholder}>
                <div>
                    <h1>{heading}</h1>
                    <p>{title}</p>
                </div>
            </div>
        </section>
    )
}