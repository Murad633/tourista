import style from './Review.module.css';


export function Review({bgImage, quote, expert, testimonialInfo, regionName, crafted, expertCountry, stars}) {
    const sectionStyle = {
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return(
        <section style={sectionStyle} className={style.review_container}>
            <div className={style.reviewCard_wrapper}>
                <div className={style.review_text}>
                    <p>{quote}</p>
                    {   expert === null ? 
                        <p style={{display: "none"}}></p> :
                        <p>Thanks {expert}!”</p> }
                    {   testimonialInfo === null ?
                        <p style={{display:"none"}}></p> :
                        <p>{ testimonialInfo }</p> }
                    {   regionName === null ?
                        <p style={{display: "none"}}></p> :
                        <p>{regionName}</p>                    }
                </div>
                <div className={style.expert_info}>
                    <img src={`${process.env.PUBLIC_URL}/assets/frameTruist.svg`} alt="" />
                    <div className={style.expert_info_text}>
                        <p>{crafted}</p>
                        <div>
                            {   expert === null ?
                                <img src={stars} alt="" /> :
                                <span className={style.expert_name} >{expert}</span> }
                            <img className={style.divider} src={`${process.env.PUBLIC_URL}/assets/Divider.svg`} alt="" />
                            <span className={style.expert_country} >{expertCountry}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}