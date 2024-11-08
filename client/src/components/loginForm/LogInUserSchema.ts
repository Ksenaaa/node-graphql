import { z } from "zod";

export const LogInUserSchema = z.object({
    nameOrEmail: z.string().min(1, { message: 'Name or Email is required!' }),
    password: z.string().min(1, { message: 'Password is required!' }),
});
