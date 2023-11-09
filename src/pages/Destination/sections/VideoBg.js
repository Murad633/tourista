import styles from '../Destination.module.css';
export function VideoBg() {
    return(
        <div className={styles.bg_wrapper}>
            <div className={styles.video__placeholder}>
                <div className={styles.video_text}>
                    <h1>Explore places on Tourista</h1>
                    <p>Destinations</p>
                </div>
            </div>
        </div>
    )
}