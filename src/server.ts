import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
// console.log('Database URL:', config.database_url);
async function main() {
	try {
		await mongoose.connect(config.database_url as string);
		app.listen(config.port, () => {
			console.log(`mongoose is listening on port ${config.port}`);
		});
	} catch (error) {
		console.log(error);
	}
	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
