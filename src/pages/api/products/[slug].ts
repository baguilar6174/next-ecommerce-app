import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../data';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data = { message: string } | IProduct;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	switch (req.method) {
		case 'GET':
			return findOne(req, res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const findOne = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	const { slug } = req.query;
	try {
		await db.connect();
		const product = await Product.findOne({ slug }).lean();
		await db.disconnect();
		if (!product) return res.status(404).json({ message: "Bad request (product doesn't exist)" });
		return res.status(200).json(product);
	} catch (error) {
		await db.disconnect();
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
