import { Schema, model } from 'mongoose';
import { TUser } from './users.interface';

const userSchema = new Schema(
	{
		id: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			require: true,
		},
		needPasswordChange: {
			type: Boolean,
			default: true,
		},
		role: {
			type: String,
			enum: ['admin', 'faculty', 'student'],
		},
		status: {
			type: String,
			enum: ['in-progress', 'blocked'],
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export const User = model<TUser>('user', userSchema);
