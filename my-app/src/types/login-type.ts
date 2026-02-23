
import { loginSchema } from "@/schemas/login-schema";
import { z } from "zod";

export type LoginType = z.infer<typeof loginSchema>;
