
"use server"
import { cookies } from "next/headers";


export async function GetToken(){


    const mytoken = await cookies()

   const TokenFromCookies =  mytoken.get("next-auth.session-token")?.value

    console.log("TokenFromCookies" , TokenFromCookies);
    
}