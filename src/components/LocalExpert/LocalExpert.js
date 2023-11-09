import angela from './assets/angela.svg';
import Callcenter from './assets/Callcenter.svg';
import textBubbleRight from './assets/textBubbleRight.svg';
import textBubbleLeft from './assets/textBubbleLeft.svg';
import style from './LocalExpert.module.css';


export function LocalExpert() {
    return(
        <div className={style.local_expert}>
            <h1 className={style.section_title}>Our Local Experts</h1>
            <div className={style.expert_container}>
                <div className={style.relative_wrapper}>
                    <img className={style.callcenter_img} src={Callcenter} alt="" />
                    <div className={style.textBubble}>
                        <img className={style.imageLeft} src={textBubbleLeft} alt="" />
                        <p className={`${style.textBubbleContent} ${style.pos_left}`}>
                        Why trust Gary in Florida to plan your trip to South Africa?
                        </p>
                    </div>
                </div>
                <div className={style.relative_wrapper} style={{marginLeft:"-80px", marginTop:"44px"}}>
                    <img className={style.callcenter_img} src={angela} alt="" />
                    <div className={style.textBubble}>
                        <img className={style.imageRight} src={textBubbleRight} alt="" />
                        <p className={` ${style.textBubbleContent} ${style.pos_right}`}>
                        When Angela in Johannesburg knows best.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}