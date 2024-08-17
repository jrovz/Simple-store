import { styleText } from "util"
import styles from './Description.module.sass'

export const Description = () => {
    return(
        
        <section>
            <article>
            <div className={styles.Description}>
                <div className={styles.Description__image}>
                    <img src="/images/logo.jpeg"/>
                </div>
                <div className={styles.Description__about}>
                    <h2>Sobre Nosotros: </h2>
                    <p>
                        una tienda pensada en la comodidad de ver y sentirse bien. Es un concepto inspirado
                        en lo sobrio y lo versatil, tiene como proposito deconstruir el concepto que tenemos al rededor
                        de la "moda", porque el toque mas importante siempre lo da nuestra actitud.
                    </p>
                    <p>
                        Productos 100% de emprendimientos colombianos
                    </p>
                    <button>Conoce más</button>
                </div>
                
            </div>
            
            
            
            </article>
            
        </section>
    )
}