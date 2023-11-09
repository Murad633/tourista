import style from '../Destination.module.css';
import { Link } from 'react-router-dom';
import ContinentsData from '../database/ContinentsData';

export function DestinationsSection() {
    const continentMenuItems = ContinentsData.map((continent)=>(
        <ContinentSection continent={continent.continent} key={continent.id} countries={continent.countries}/>
    ))
    return(
        <div className={style.destinations__section}>
            <div className={style.destinations__container}>
                {continentMenuItems}
            </div>
        </div>
    )
}
function ContinentSection({continent, countries}) {
    return(
        <div className={style.continent_section}>
            <h3>{continent}</h3>
            <ul>
                {countries.map((continent, index)=> (
                    <li key={index}>
                        <Link to={continent.link} className={style.list_item}>{continent.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}