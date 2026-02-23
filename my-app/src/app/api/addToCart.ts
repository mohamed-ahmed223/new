"use server";

import axios from "axios";
import { getServerSession } from "next-auth/next";
import { nextAuthConfig } from "@/next-auth/next-auth.config";

export async function AddToCart(productId: string) {
  const session = await getServerSession(nextAuthConfig);

  if (!session?.user?.realTokenFromBackEnd) {
    throw new Error("User token not found");
  }

  const token = session.user.realTokenFromBackEnd;

  const { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v2/cart",
    { productId },
    {
      headers: {
        token: token,
      },
    }
  );

  return data;
}