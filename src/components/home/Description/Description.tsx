import { styleText } from "util"
import styles from './Description.module.sass'

export const Description = () => {
    return(
        
        <section>
            <article>
            <div className={styles.Description}>
                <img src="/images/img1.jpeg"/>
                <h2>SIMPLE</h2>
                <p>
                    una tienda pensada en la comodidad de ver y sentirse bien. Es un concepto inspirado
                    en lo sobrio y lo versatil, tiene como proposito deconstruir el concepto que tenemos al rededor
                    de la "moda", porque el toque mas importante siempre lo da nuestra actitud.
                </p>
                <button>Conoce más</button>
            </div>
            
            
            </article>
            
        </section>
    )
}