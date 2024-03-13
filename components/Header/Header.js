import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Link from "next/link";

export default function Header() {

  return ( 
    <header className="header">
      <div className="container row">
        <h1 className="title">
          <Link href="/" className="title">
            IM-DB
          </Link>
        </h1>

        {/*  mobile navigation */}
        <HamburgerIcon onClick={() => (
          setIsMobileNavOpen(true)
        )}/>

        {/* Desktop navigation */}
        <nav className="desktop-nav">
            <ul className="nav__list">
              <li className="list__item">
                <Link href="/about" className="list__link">
                  About
                </Link>
              </li>
              <li className="list__item">
                <Link href="/watch-list" className="list__link">
                  Watch List
                </Link>
              </li>
              <li className="list__item" >
                <Link href="/auth/login" className="list__link">
                  Login
                </Link>
              </li>
              <button className="list__item list__item--button">
                <Link href="/auth/register" className="list__link">
                  Register
                </Link>
              </button>
            </ul>
        </nav>
      </div>
    </header>
    


  )
}
