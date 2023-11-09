import { LocalExpert } from '../../components/LocalExpert/LocalExpert'
import { BgSection } from '../../components/BgSection/BgSection'
import { Looking } from '../../components/Looking/Looking'
import { WhyUs } from '../../components/WhyUS/WhyUS'
import ReasonCardData from '../Hompage/database/ReasonCardData'
import { JoinUs } from "../../components/JoinUs/JoinUs";
import bgImage from './assets/aboutUsBG.svg'
import style from './Aboutus.module.css'
export function AboutUs() {
    return(
        <>
            <BgSection heading={"About us"} title={"Discover Our Passion for Travel and Adventure."} bgImage={bgImage} />
            <section className={style.about_section}>
                <div className={style.about_body}>
                    <h1>Changing how the world travels</h1>
                    <p>We’re on a journey to transform ordinary trips into extraordinary ones. We are your guide, bringing you personal experiences. Wherever your travels take you, we’ll show you the unique and unmissable things to do in your destination. With GetYourGuide on your side (and in your pocket), creating memorable moments has never been easier. Today, millions have used GetYourGuide to turn their travel dreams into reality. And we’re just getting started. We're changing the way people connect to the places they visit so anyone can create their dream vacation. It’s your journey, your way.</p>
                </div>
            </section>
            <WhyUs headingText={"Why us?"} dataBase={ReasonCardData} />
            <LocalExpert />
            <Looking />
            <JoinUs />
        </>
    )
}