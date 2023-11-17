import { Review } from '../../components/Review/Review'
import { Card } from '../../components/Card/Card'
import './Destination.module.css'
import { DestinationsSection } from './sections/DestinotionsSection'
import { VideoBg } from './sections/VideoBg'
import { JoinUs } from '../../components/JoinUs/JoinUs'
import { CardSection } from '../../components/CardSection/CardSection'
import TopDestinationsData from './database/TopDestinationsData'
export function Destination() {
    return(
        <>
            <VideoBg/>
            <DestinationsSection/>
            <CardSection card={Card} sectionTitle={"Top Destinations"} dataBase={TopDestinationsData}/>
            <Review bgImage={'/assets/review2.png'} 
                quote={'“Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and amazing local food spots.He even met us for a coffee to make sure we had everything we needed.'}
                expert={"Tiago"}
                testimonialInfo={"Charlie, rappelling down a 370-foot waterfall"}
                regionName={"The Azores"}
                crafted={"Trip crafted by"}
                expertCountry={"Local expert in Portugal"}
                stars={null}
            />
            <JoinUs/>
        </>
    )
}