"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerFormInput } from "@/constants/register-inputs copy";
import { registerSchema } from "@/schemas/register-schema copy";
import { RegisterType } from "@/types/register-type copy";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";




export default function Register() {

  const router = useRouter()


  const [loading, setLoading] = useState(false);
  const form = useForm<RegisterType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    resolver: zodResolver(registerSchema)
  });
  const register = async (data: RegisterType) => {


    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {

        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const finaldata = await res.json()
      console.log(finaldata);
      if (!res.ok) {
        toast.error("Error ya Brooooooo ", { position: "top-center" });
        throw new Error(finaldata.message)

      }
      toast.success("kda ElAccount zy alfol ya A5oyaa  🎉", {
        position: "top-center"
      });
      return true;
    }
    catch (error) {
      console.log(error);
      return null;
    }
  };
  const onSubmit = async (data: RegisterType) => {
    setLoading(true);
    const res = await register(data);
    if(res){
      router.push("/login")
    }
    setLoading(false);
  };

  return (
    <>
      <div className="momo">
        <div className="koko w-1/2 mx-auto shadow-lg">
          <h1 className="text-center">Register Page</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto">
            <FieldGroup>
              {registerFormInput.map(({ name, placeholder }) => <Controller key={name}
                name={name} control={form.control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>{name}</FieldLabel>
                  <Input
                    name={name}
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
                {loading ? "Creating account..." : "Submit"}
              </Button>
            </FieldGroup>

          </form>
        </div>
      </div>
    </>
  );


}










