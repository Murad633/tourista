import { AccordionSection } from "../../components/AccordionSection/AccordionSection";
import { BgSection } from "../../components/BgSection/BgSection";

export function FAQ() {
    return(
        <>
            <BgSection heading={"FAQ"} title={"Unlocking the Mysteries of Travel: Your Questions, Our Journey."} bgImage={'/assets/faqBG.png'} />
            <AccordionSection/>
        </>
    )
}