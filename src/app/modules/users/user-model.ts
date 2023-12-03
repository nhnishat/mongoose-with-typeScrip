import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
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
			default: 'in-progress',
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

// pre save middleware/ hook : will work on create()  save()
userSchema.pre('save', async function (next) {
	// console.log(this, 'pre hook : we will save  data');
	// eslint-disable-next-line @typescript-eslint/no-this-alias
	const user = this; // doc
	// hashing password and save into DB
	user.password = await bcrypt.hash(
		user.password as string,
		Number(config.bcrypt_salt_rounds)
	);
	next();
});

// post save middleware / hook
userSchema.post('save', function (doc, next) {
	doc.password = '';
	next();
});

export const User = model<TUser>('user', userSchema);
