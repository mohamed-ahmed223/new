
import { registerSchema } from "@/schemas/register-schema copy";
import { z } from "zod";

export type RegisterType = z.infer<typeof registerSchema>;
