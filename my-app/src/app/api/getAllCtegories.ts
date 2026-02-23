import { GetToken } from "./getMyToken";

export default async function GetAllCategories(){
GetToken()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`, {method:"GET", cache:"force-cache"});
  const {data}= await response.json()
   console.log(data);
   return  data;
}
