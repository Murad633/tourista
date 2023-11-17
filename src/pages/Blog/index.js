import { BgSection } from "../../components/BgSection/BgSection";
import { Looking } from "../../components/Looking/Looking";
import { JoinUs } from "../../components/JoinUs/JoinUs";
import { BlogArticle } from "./sections/BlogArticle";
import style from './Blog.module.css'
import { Link } from "react-router-dom";
export function Blog() {
    const CategoriesDate = ["All articles", "Food & Drink", "Inspiration", "Local Guides", "See & Do", "Travel Tips", "Where to stay"]
    return(
        <>
            <BgSection heading={"Blog"} title={'Blog articles for "Inspiration".'} bgImage={'/assets/blogBG.png'} />
            <section className={style.categories_section}>
                <ul>
                    {CategoriesDate.map((item, index)=>(
                        <li key={index}><Link className={style.nav_item} to="#">{item}</Link></li>
                    ))}
                </ul>
            </section>
            <BlogArticle />
            <Looking />
            <JoinUs />
        </>
    )
}