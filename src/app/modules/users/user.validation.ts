import { z } from 'zod';

export const userValidationSchema = z.object({
	password: z
		.string({
			invalid_type_error: 'password must be string',
		})
		.max(10, { message: 'password can not be 20 character' })
		.optional(),
});
