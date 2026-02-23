import { LoginType } from "@/types/login-type";
import axios from "axios";
import { cookies } from "next/headers";
import { toast } from "sonner";

export const login = async (data: LoginType) => {
  try {
    const res = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      data
    )

    toast.success("Login successful 🎉", {position: "top-center"});
    const cookie = await cookies();
    cookie.set("user-token" , res.data.token);
    console.log(res.data.token);

    return res.data; 
  } 
  catch (error: any) {
    const message =
      error?.response?.data?.message || "Invalid email or password";

    toast.error(error.res.data.message, { position: "top-center" });
    return null;
  }
};
