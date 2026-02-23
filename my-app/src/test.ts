import { redirect } from 'next/dist/server/api-utils';
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'
import { GetToken } from './app/api/getMyToken';
import { matchesMiddleware } from 'next/dist/shared/lib/router/router';

export default async function Middleware(req: NextRequest) {

    const jwt = await GetToken()

    console.log("jwt", jwt);

    if (jwt) {

        return NextResponse.next()
        
    }
    else {
        return NextResponse.redirect("http://localhost:3000/login")
    }
}


export const config = {


    matcher: ["/cart", "/order"]
}
// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req });

//   console.log("jwt", token);

//   if (token) {
//     return NextResponse.next();
//   }

//   const loginUrl = new URL("/", req.url);
//   return NextResponse.redirect(loginUrl);
// }

// export const config = {
//   matcher: ["/cart", "/order"],
// };