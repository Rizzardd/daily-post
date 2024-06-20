import { z } from 'zod';

export const UserRegistration = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  })
  .required();

// extract the inferred type
export type UserRegistration = z.infer<typeof UserRegistration>;

export const UserCredentials = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  .required();

// extract the inferred type
export type UserCredentials = z.infer<typeof UserCredentials>;
