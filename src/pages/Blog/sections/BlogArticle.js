import BlogData from '../database/BlogData';
import style from '../Blog.module.css';
export function BlogArticle() {
    return(
        <section className={style.blog_article}>
            <div className={style.blog_container}>
                {BlogData.map((content, index) =>(
                    <BlogCard key={index} image={content.image} title={content.title} upperText={content.upperText} />
                ))}
            </div>
        </section>
    )
}
function BlogCard({image, title, upperText}) {
    return(
        <div className={style.trip_card}>
            <img src={image} alt="" />
            <div className={style.text_wrapper}>
                <h3 style={{display:  upperText === null ? "none"  : "" }}>{upperText}</h3>
                <p>{title}</p>
            </div>
        </div>
    )
}