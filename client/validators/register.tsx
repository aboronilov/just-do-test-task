import { z } from "zod";

export const registerSchema = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    confirm_password: z.string().min(8),
}).superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        });
    }
});