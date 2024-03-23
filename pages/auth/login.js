import Link from "next/link"

export default function Login() {

    return(
        <article className="article-login col">
            <div className="login__container">
                <form className="form col">
                    <label>Login to your account</label>
                    <input type="email" placeholder={"Email"}/>
                    <input type="password" placeholder={"Password"}/>
                    <input type="submit"/>
                    <Link href="/auth/register/">Don't have an account? Sign Up</Link>
                </form>
            </div>
        </article>
    )
}