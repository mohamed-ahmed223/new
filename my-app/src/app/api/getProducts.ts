export default async function getAllProducts(){

    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {method:"GET", cache:"force-cache"});
  let {data}= await response.json()
   console.log(data);
   return  data;
}