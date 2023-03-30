import type { NextApiRequest, NextApiResponse } from 'next';
import { db, initialData } from '../../data';
import { Product } from '../../models';

type Data = {
	message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
	if (process.env.NODE_ENV === 'production') {
		return res.status(401).json({
			message: 'No access to this endpoint'
		});
	}
	await db.connect();
	await Product.deleteMany();
	await Product.insertMany(initialData.products);
	await db.disconnect();
	res.status(200).json({ message: 'Created fake data' });
}
