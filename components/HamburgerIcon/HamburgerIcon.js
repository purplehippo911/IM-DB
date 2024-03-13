// hamburger icon made by https://uiverse.io/Ali-Tahmazi99/unlucky-termite-68
import Link from "next/link"

export default function HamburgerIcon() {
    return (
        <div className="HamburgerIcon">
            <label className="bar" htmlFor="check">
                <input type="checkbox" id="check"/>

                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>

                <nav className="mobile-nav">
                    <ul className="nav__list">
                        <li className="list__item">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link href="/about">
                                Watch
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link href="/auth/login">
                                Login
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link href="/auth/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </label>
        </div>
    )
}
