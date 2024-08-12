import Head from "next/head";
import Link from "next/link";

export const Header = () => {
    return(
        <header>
          <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
          </Head>
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