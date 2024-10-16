import { z } from "zod";

export const UserSchema = z.object({
    name: z.string().min(1, { message: 'Name is required!' }),
    email: z.string().min(1, { message: 'Email is required!' }).email('This is not email!'),
    password: z.string().min(1, { message: 'Password is required!' }),
});
