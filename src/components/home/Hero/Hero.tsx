import styles from "./Hero.module.sass"
export const Hero = () => {
    console.log(styles)
    return(
        <section className={styles.Hero}>
            <h1>Simple</h1>
            <h2> Back to Basic </h2>
        </section>
    )
}