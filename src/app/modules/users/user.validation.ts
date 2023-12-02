import { z } from 'zod';

export const userValidationSchema = z.object({
	id: z.string(),
	password: z.string().max(10, { message: 'password can not be 20 character' }),
	needPasswordChange: z.boolean().optional().default(true),
	role: z.enum(['admin', 'faculty', 'student']),
	status: z.enum(['in-progress', 'blocked']).default('in-progress'),
	isDeleted: z.boolean().default(false),
});
