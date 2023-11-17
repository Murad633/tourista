import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import style from '../Italy.module.css';
import { TripCard } from '../../../components/TripCard/TripCard';
export function ItalyMap() {
    return(
        <section className={style.map_section}>
            <header>
                <p>Tops things to do</p>
                <div>
                    <button style={{marginRight:"16px"}}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{width:"24px", height:"24px"}} />
                    </button>
                    <button>
                    <FontAwesomeIcon icon={faChevronRight} style={{width:"24px", height:"24px"}} />
                    </button>
                </div>
            </header>
            <div className={style.map_section_card}>
               <TripCard image={'/assets/cardImg.png'} title={"Have the drive of your life on the cliff roads of the AAmalfi Coast"} />
            </div>
        </section>
    )
}