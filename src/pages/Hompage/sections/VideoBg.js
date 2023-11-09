import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import style from '../Homepage.module.css';

export function VideoBg() {
    return(
        <div className={style.bg_wrapper}>
            <div className={style.video_placeholder}>
                <div className={style.bg_items}>
                    <p className={style.bg_title}>We create trips you love</p>
                    <p className={style.bg_subtitle}>Trips you couldn't plan, even if you wanted to.</p>
                    <div className={style.search_field}>
                        <input type="search" placeholder="Where do you want to go?" name="" id="" />
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff", width: "24px", height:"24px"}} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}