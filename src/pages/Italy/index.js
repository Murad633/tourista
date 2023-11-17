import { ItalyBg } from "./sections/ItalyBg";
import { CardSection } from "../../components/CardSection/CardSection"
import CitiesOfItaly from "./database/CitiesOfItaly";
import { ItalyMap } from "./sections/ItalyMap";
import { Card } from '../../components/Card/Card'
import NewTrips from "./database/NewTrips";
import { TripCard } from "../../components/TripCard/TripCard";
import { Review } from "../../components/Review/Review";
import { WhyUs } from "../../components/WhyUS/WhyUS";
import ReasonCardData from "./database/ReasonCardData";
import { Looking } from "../../components/Looking/Looking";
import { JoinUs } from "../../components/JoinUs/JoinUs";

export function Italy() {
    return(
        <>
            <ItalyBg/>
            <CardSection card={Card} sectionTitle={"Available trips"} dataBase={CitiesOfItaly} paddingTop="120px" />
            <ItalyMap />
            <CardSection card={TripCard} sectionTitle={"Must-see attractions for your itinerary"} paddingTop="120px" dataBase={NewTrips} />
            <Review bgImage={'/assets/review3.png'} 
                quote={"We have a very good time all the way. The Capri boat ride is excellent and so much fun with the crew! They are awesome."}
                expert={null}
                testimonialInfo={null}
                regionName={null}
                crafted={"Vivian Lim"}
                expertCountry={"18 June 2024"}
                stars={'/assets/Stars.svg'}
            />
            <WhyUs headingText={"Expert guidance to help you plan your trip"} dataBase={ReasonCardData} paddingTop="120px" />
            <Looking/>
            <JoinUs/>
        </>
    )
}