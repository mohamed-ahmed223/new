import { NextResponse } from "next/server"


export function GET(){

return NextResponse.json({


message:"success",

data:[
    {name:"ahmed" , age:22},
    {name:"momo" , age:22},
    {name:"koko" , age:22}
]

})




}