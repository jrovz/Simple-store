"use client"
import { styleText } from "util"
import styles from './Description.module.sass'
import Image from "next/image"
import { useState } from "react"

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCABKAEoDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EAB0QAAMBAQADAQEAAAAAAAAAAAABAgMRITFhEhP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBQT/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARESAv/aAAwDAQACEQMRAD8A+KCSMSHRHTlyOjaBSGoHTmMWJfDO1L+DHLLP4/AayDgSonIDRVeYmpFyuUhozgxyZ+Qw9NleSnKek8LyW4yX5iLTs8x85BZQUzHg1xnqV5C7yL3Am4DBHnaZk1wehrJJpJOKlR1IPB1IDgsVrc/ZdgQx7LcGHlNejiVT6I8qKpo0QYxOgbsTdAE2pHqV60R6MSonv2AFTBJMMPyVZVwjT4Oi+GfmqsennoPnU8yNfo1bfTTpnj0HqKvUle30CtvodCQzSybSjL0E3YulyMqgegujP0LTx3TVXATjz7izVoEtRBwu6nD/AOv0x6Cjg7pYN2A6MYLKnqqxzZnTmYVpv//Z'

export const Description = () => {
    const [hasBorder, setBorder] = useState(false);
    const handleClick = () => setBorder(!hasBorder)
    return(
        
        <section>
            <article>
            <div className={styles.Description}>
                <div className={styles.Description__image}>
                    <Image 
                    src="/images/logo.jpeg" 
                    alt="logoImage" 
                    fill 
                    placeholder="blur"
                    blurDataURL= {PLACEHOLDER_IMAGE}
                    />
                </div>
                <div className={styles.Description__about}>
                    <h2>Sobre Nosotros: </h2>
                    <p>
                        Una tienda pensada en la comodidad de ver y sentirse bien. Es un concepto inspirado
                        en lo sobrio y lo versatil, tiene como proposito deconstruir el concepto que tenemos al rededor
                        de la "moda", porque el toque mas importante siempre lo da nuestra actitud.
                    </p>
                    <p>
                        Productos 100% de emprendimientos colombianos.
                    </p>
                    <p>
                        Nuestras prendas estan fabricadas en polylicradoble, lo que las hace muy flexibles,
                        por ahora todas las blusas y bodys son talla unica pero nuestra meta es que en esta tienda
                        existan tantas tallas como cuerpos.
                    </p>
                    <h3> ¡¡Bienvenidos a la tienda de Todxs!! </h3>
                    <button onClick={handleClick}>Conoce más</button>
                </div>
                
            </div>
            
            
            
            </article>
            
        </section>
    )
}
