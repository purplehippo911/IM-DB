"use client";
import { Session, getServerSession } from "next-auth";
import { SessionProvider as Provider} from "next-auth/react";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default function SessionProvder({children, Provider}) {
    return (
        <Provider> 
            {children}
        </Provider>
    )

}