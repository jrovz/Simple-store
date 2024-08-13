import Link from "next/link";
import styles from './Header.module.css'

export const Header = () => {
    return(
        <header>
          <nav>
            <ul className={styles.Header__list}>
              <li>
                <Link href = "/">
                  Home
                </Link>
              </li>
            
              <li>
              <Link href = "/store">
                Store
              </Link>
              </li>
              
            </ul>
          </nav>
          <nav>
            <button className="profile">
              <svg></svg>
            </button>
            <button className="wishlist">
              <svg></svg>
            </button>
            <button className="cart">
              <svg></svg>
            </button>
          </nav>
        </header>
    )
}