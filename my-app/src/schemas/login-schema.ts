
import { z } from "zod";

export const loginSchema = z.object({
       

        email: z
            .string().trim().email("Please enter a valid email address"),

        password: z
            .string().min(5, "Password must be at least 8 characters long")
            // .regex(
            //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
            //     "Password must include uppercase, lowercase, number, and special character"
            // ),

        
    })
    
