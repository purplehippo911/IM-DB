import '@styles/globals.css';
import '@components/Footer/Footer.modules.css';
import "@components/Header/Header.modules.css";
import "@components/Main/Main.modules.css"
import "@components/HamburgerIcon/Hamburger.modules.css"
import "@components/NetflixSlider/NetflixSlider.modules.css";
import "@components/MovieList/MovieList.modules.css"
import "@components/SearchBar/SearchBar.modules.css"
import "@styles/register.modules.css"
import "@styles/about.modules.css";


import RootLayout from "@components/RootLayout"



function Application({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default Application
