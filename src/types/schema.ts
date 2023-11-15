import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, { message: 'user name is required' }),
});
