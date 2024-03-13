import '@styles/globals.css';
import '@components/Footer/Footer.modules.css';
import "@components/Header/Header.modules.css";
import "@components/Main/Main.modules.css"
import "@components/HamburgerIcon/Hamburger.modules.css"
import "@components/NetflixSlider/NetflixSlider.modules.css";

import RootLayout from "@components/RootLayout"



function Application({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default Application
