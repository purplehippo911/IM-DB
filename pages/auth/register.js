import Link from "next/link"

export default function RegisterUser() {
    return(
            <article className="article-login col">
                <div className="login__container">
                    <form className="form col">
                        <label>Sign up</label>
                        <input type="email" placeholder={"Email"}/>
                        <input type="password" placeholder={"Password"}/>
                        <input type="submit" />
                        <Link href="/auth/login/">Already have an account? Log In</Link>
                    </form>
                </div>
         </article>
    )
}