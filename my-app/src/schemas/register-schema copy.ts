// import z, { string } from "zod";

// export const registerSchema=z.object({

//     name:string().nonempty("Your Name is Required").min(3),
//     email:string().nonempty("Your Email is Required").email(),
//     password:string().nonempty("Password is Required"),

//     rePassword:string().nonempty("Password is Required"),
//     phone:string().nonempty("phone numbner is Required")
// });
import { z } from "zod";

export const registerSchema = z.object({
        name: z
            .string()
            .trim()
            .min(3, "Name must be at least 3 characters long")
            .max(50, "Name must not exceed 50 characters"),

        email: z
            .string().trim().email("Please enter a valid email address"),

        password: z
            .string().min(8, "Password must be at least 8 characters long")
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                "Password must include uppercase, lowercase, number, and special character"
            ),

        rePassword: z
            .string().min(1, "Confirm password is required"),

        phone: z
            .string().trim().regex(
                /^\+?[0-9]{10,15}$/,
                "Phone number must be valid (10–15 digits)"
            ),
    })
    .refine((data) => data.password === data.rePassword, {
        message: "Passwords do not match",
        path: ["rePassword"],
    });




