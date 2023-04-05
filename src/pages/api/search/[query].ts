import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../data';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data = { message: string } | IProduct[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	switch (req.method) {
		case 'GET':
			return findByTitleAndTags(req, res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const findByTitleAndTags = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	let { query = '' } = req.query;
	if (query.length === 0) return res.status(400).json({ message: 'Bad request (empty query param)' });
	query = query.toString().trim().toLowerCase();
	try {
		await db.connect();
		const products = await Product.find({ $text: { $search: query } })
			.select('title images price inStock slug -_id')
			.lean();
		await db.disconnect();
		return res.status(200).json(products);
	} catch (error) {
		await db.disconnect();
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
