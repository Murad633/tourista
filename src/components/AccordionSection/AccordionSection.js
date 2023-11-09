import style from './Accordion.module.css'
import AccordionData from '../../pages/FAQ/database/AccordionData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export function AccordionSection() {
    const [accordion, setActiveAccordion] = useState(0);
    function toggleAccordion(index) {
        if(accordion === index) {
            setActiveAccordion(-1);
            return;
        }
        setActiveAccordion(index);
    }
    return(
        <section className={style.accordion_section}>
            <div className={style.accordion_container}>
                {AccordionData.map((item, index)=>(
                    <div key={index} className={style.accordion_surface}>
                        <div onClick={()=> toggleAccordion(index)} className={style.surface_header}>
                            <span className={style.surface_number}>{item.number}</span>
                            <div className={style.title_wrapper}>
                                <p>{item.title}</p>
                                <button 
                                    className={ accordion === index ? 
                                    style.btn_active : 
                                    style.btn_inactive }>
                                        <FontAwesomeIcon className={ accordion === index 
                                            ? style.faPlus_active : 
                                            style.faPlus_inactive } icon={faPlus} />
                                </button>
                            </div>
                        </div>                       
                        <div className={ accordion === index ? style.accordion_text_active : style.accordion_text_inactive}>{item.text}</div> 
                    </div>
                ))}
            </div>
        </section>
    )
}