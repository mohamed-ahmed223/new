"use server"

import axios from "axios"
import { GetToken } from "./getMyToken";


export async function GetCartData() {
    
const token = await GetToken()
    const data = await axios.get("https://ecommerce.routemisr.com/api/v2/cart" ,


         { headers: {
        token : token as string 

      }
      })
    

  return data;
}
    
