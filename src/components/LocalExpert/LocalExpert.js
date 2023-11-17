import React from 'react';
import style from './LocalExpert.module.css';

export function LocalExpert() {
    return(
        <div className={style.local_expert}>
            <h1 className={style.section_title}>Our Local Experts</h1>
            <div className={style.expert_container}>
                <div className={style.relative_wrapper}>
                    <img className={style.callcenter_img} src={`${process.env.PUBLIC_URL}/assets/Callcenter.png`} alt="" />
                    <div className={style.textBubble}>
                        <img className={style.imageLeft} src={`${process.env.PUBLIC_URL}/assets/textBubbleRight.svg`} alt="" />
                        <p className={`${style.textBubbleContent} ${style.pos_left}`}>
                        Why trust Gary in Florida to plan your trip to South Africa?
                        </p>
                    </div>
                </div>
                <div className={style.relative_wrapper} style={{marginLeft:"-80px", marginTop:"44px"}}>
                    <img className={style.callcenter_img} src={`${process.env.PUBLIC_URL}/assets/angela.png`} alt="" />
                    <div className={style.textBubble}>
                        <img className={style.imageRight} src={`${process.env.PUBLIC_URL}/assets/textBubbleRight.svg`} alt="" />
                        <p className={` ${style.textBubbleContent} ${style.pos_right}`}>
                        When Angela in Johannesburg knows best.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}