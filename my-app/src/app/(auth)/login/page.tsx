"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginFormInput } from "@/constants/login-inputs";
import { loginSchema } from "@/schemas/login-schema";
import { LoginType } from "@/types/login-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { login } from "../../api/looggin";
import { signIn } from "next-auth/react";
import { toast } from "sonner";




export default function Login() {

  const router = useRouter()


  const [loading, setLoading] = useState(false);
  const form = useForm<LoginType>({
    defaultValues: {

      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema)
  });
 
  const onSubmit = async (data: LoginType) => {
    setLoading(true);
    // const res = await login(data);
    const res = await signIn("credentials" , {...data  , redirect:true , callbackUrl:"/"})
    if (res) {
      toast.success("Login successful 🎉", {position: "top-center"});
    }
    else{
      toast.error("Something Went Wrong yabooya", { position: "top-center" });
    }
  };

  return (
    <>
      <div className="momo">
        <div className="koko w-1/2 mx-auto shadow-lg">
          <h1 className="text-center">Login Page</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto">
            <FieldGroup>
              {loginFormInput.map(({ name, placeholder }) => <Controller key={name}
                name={name} control={form.control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>{name}</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder={placeholder}
                    autoComplete="off"
                  />

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>} />


              )}

              <Button type="submit" disabled={loading}>
                {loading ? "Login noooow..." : "Submit"}
              </Button>
            </FieldGroup>

          </form>
        </div>
      </div>
    </>
  );


}










