import { LocalExpert } from '../../components/LocalExpert/LocalExpert'
import { Card } from '../../components/Card/Card'
import { VideoBg } from './sections/VideoBg'
import { WhyUs } from '../../components/WhyUS/WhyUS'
import { Looking } from '../../components/Looking/Looking'
import { JoinUs } from '../../components/JoinUs/JoinUs'
import { Review } from '../../components/Review/Review'
import bgImage from './assets/review.svg'
import { CardSection } from '../../components/CardSection/CardSection'
import TrendingData from './database/TrendingData'
import BrandData from './database/BrandData'
import EuropeData from './database/EuropeData'
import AsiaData from './database/AsiaData'
import ReasonCardData from './database/ReasonCardData'

export function Home() {
    return(
        <>
            <VideoBg/>
            <CardSection card={Card} paddingTop="72px" sectionTitle={"Trending now"} dataBase={TrendingData}/>
            <CardSection card={Card} sectionTitle={"Brand new trips"} dataBase={BrandData}/>
            <WhyUs headingText={"Why us?"} dataBase={ReasonCardData} />
            <LocalExpert/>
            <Review bgImage={bgImage} 
                quote={'“Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and amazing local food spots.He even met us for a coffee to make sure we had everything we needed.'}
                expert={"Tiago"}
                testimonialInfo={"Charlie, rappelling down a 370-foot waterfall"}
                regionName={"The Azores"}
                crafted={"Trip crafted by"}
                expertCountry={"Local expert in Portugal"}
                stars={null}
            />
            <CardSection card={Card} paddingTop="72px" sectionTitle={"Europe"} dataBase={EuropeData}/>
            <CardSection card={Card} sectionTitle={"Asia"} dataBase={AsiaData}/>
            <Looking/>
            <JoinUs/>
        </>
    )
}