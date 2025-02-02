import { NextResponse } from "next/server"

const user = true;

const coo = 'next js'
export const middleware = (request) =>{
const cookies = request.cookies.get('token')

if(!cookies || cookies.value !== coo ) {
    return NextResponse.redirect(new URL('/login', request.url))
}
return NextResponse.next()


if(!user){
    return NextResponse.redirect(new URL('/login', request.url))    
}

return NextResponse.next()

    if(request.nextUrl.pathname.startsWith('/about')){
        return NextResponse.redirect(new URL('/blogs', request.url))
    }
    //   return NextResponse.redirect(new URL('/blogs', request.url))
    //  return NextResponse.rewrite(new URL('/blogs', request.url))
    // return NextResponse.next()
}

export const config = {
     matcher: ['/dashboards', '/contact']
 }