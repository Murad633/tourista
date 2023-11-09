import { BgSection } from '../../components/BgSection/BgSection';
import bgImage from './assets/contactUsBG.svg';
import style from './ContactUs.module.css';
import { Link } from 'react-router-dom';
import { Looking } from '../../components/Looking/Looking'
import { JoinUs } from '../../components/JoinUs/JoinUs'
export function ContactUs() {
    return(
        <>
            <BgSection heading={"Contact us"} title={"Your Journey Begins with a Conversation - Reach Out to Us Today!"} bgImage={bgImage} />
            <section className={style.contacts_section}>
                <div className={style.contacts_container}>
                    <div className={style.commercial_contacts}>
                        <div>
                            <h2>Commercial Contacts</h2>
                        </div>
                        <div>
                            <p>To advertise on Tourista:</p>
                            <Link className={style.link_item} to="mailto:advertise@tourista.com" >advertise@tourista.com</Link>
                        </div>
                        <div>
                            <p>To become an affiliate partner:</p>
                            <Link className={style.link_item} to="mailto:affiliate@tourista.com" >affiliate@tourista.com</Link>
                        </div>
                        <div>
                            <p>To contact the hotels team:</p>
                            <Link className={style.link_item} to="mailto:hotels@tourista.com" >hotels@tourista.com</Link>
                        </div>
                        <div>
                            <p>Send your request to republish Tourista content:</p>
                            <Link className={style.link_item} to="mailto:contentlicensing@tourista.com" >contentlicensing@tourista.com</Link>
                        </div>
                        <div>
                            <p>To contact the experiences team:</p>
                            <Link className={style.link_item} to="mailto:experiences@tourista.com" >experiences@tourista.com</Link>
                        </div>   
                    </div>
                    <div className={style.content_contact}>
                        <div>
                            <h2>Content Contact</h2>
                        </div>
                        <div>
                            <p>To report an issue to our content teams please contact: </p>
                            <Link className={style.link_item} to="mailto:corrections@tourista.com" >corrections@tourista.com</Link>
                        </div>
                        <div>
                            <h2>Press Contact</h2>
                        </div>
                        <div>
                            <p>If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office:</p>
                            <Link className={style.link_item} to="mailto:pr@tourista.com" >pr@tourista.com</Link>
                        </div>
                        <div>
                            <h2>Partnership Contact</h2>
                        </div>
                        <div>
                            <p>For partnership opportunities:</p>
                            <Link className={style.link_item} to="mailto:partnerships@tourista.com" >partnerships@tourista.com</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Looking />
            <JoinUs />
        </>
    )
}