import styles from './Header.module.css'
import Link from "next/link";

export const Header = () => {
    return(
        <header className='styles.Header'>
          <nav>
            <ul>

              <Link href = "/">
              <li>Home</li>
             </Link>
              <Link href = "/store">
              <li>Store</li>
              </Link>
            </ul>
          </nav>
        </header>
    )
}