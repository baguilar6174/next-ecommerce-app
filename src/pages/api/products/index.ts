import type { NextApiRequest, NextApiResponse } from 'next';
import { db, SHOP_CONSTANTS } from '../../../data';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data = { message: string } | IProduct[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	switch (req.method) {
		case 'GET':
			return getAll(req, res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const getAll = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	try {
		const { gender = 'all' } = req.query;
		let condition = {};
		if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
			condition = { gender };
		}
		await db.connect();
		const products = await Product.find(condition).select('title images price inStock slug -_id').lean();
		await db.disconnect();
		res.status(200).json(products);
	} catch (error) {
		await db.disconnect();
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
