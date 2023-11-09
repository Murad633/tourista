import { AccordionSection } from "../../components/AccordionSection/AccordionSection";
import { BgSection } from "../../components/BgSection/BgSection";
import bgImage from './assets/faqBG.svg'

export function FAQ() {
    return(
        <>
            <BgSection heading={"FAQ"} title={"Unlocking the Mysteries of Travel: Your Questions, Our Journey."} bgImage={bgImage} />
            <AccordionSection/>
        </>
    )
}