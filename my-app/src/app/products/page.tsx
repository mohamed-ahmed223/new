"use client";
import getAllProducts from "../api/getProducts";
import Link from "next/link";
import Image from "next/image";
import AddCartBtn from "./AddCartButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Products() {
  const data = await getAllProducts();

  return (
    <>
      <div className="text-center font-bold pt-4">
        <h1>Products</h1>
      </div>
      <hr className="my-2" />

      <div className="container mx-auto pt-5">
        <div className="flex flex-wrap gap-4">
          {data.map((product: any) => (
            <div
              key={product._id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <Link href={`/products/${product._id}`}>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>
                      <div className="relative w-full h-48">
                        <Image
                          src={product.imageCover}
                          alt={product.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    </CardTitle>
                    <CardDescription>{product.category.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-bold line-clamp-1">{product.title}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="font-semibold">{product.price} EGP</p>
                    <p className="flex items-center gap-1">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      {product.ratingsAverage}
                    </p>
                  </CardFooter>
                </Card>
              </Link>

              {/* Add to Cart Button */}
              <div className="mt-2">
                <AddCartBtn productId={product._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}