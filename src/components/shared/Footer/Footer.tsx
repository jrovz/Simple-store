import Image from "next/image"
import styles from './Footer.module.sass'


export const Footer = () => {
    return(
        <footer>
            <div className={styles.Footer}>
                <div className={styles.Footer__social}>
                    
                    <h1>
                        contactanos
                    </h1>
                    <p>
                        Instagram : @simple_tienda
                    </p>
                    
                </div>
                <div className={styles.Footer__logo}>
                    <Image 
                        src="/images/insta.png" 
                        alt="" 
                        fill 
                        
                    />
                </div>
                
            </div>
            
            <p> Simple Store </p>
        </footer>
    )
}