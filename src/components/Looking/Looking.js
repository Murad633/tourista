import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import style from './Looking.module.css';

export function Looking() {
    return(
        <section className={style.looking_section}>
            <div>
                <span>Looking to go elsewhere?</span>
                <button>Our destinations 
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#4a21ef", marginLeft:"8px"}}/>
                </button>
            </div>
        </section>
    )
}