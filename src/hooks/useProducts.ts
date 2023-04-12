import useSWR, { SWRConfiguration } from 'swr';
import { IProduct } from '../interfaces';
// const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
	// const { data, error, isLoading } = useSWR<IProduct[]>(`/api${url}`, fetcher, config);
	const { data, error, isLoading } = useSWR<IProduct[]>(`/api${url}`, config);
	return {
		products: data || [],
		//isLoading: !error && !data,
		isLoading,
		error
	};
};

export const useProduct = (url: string, config: SWRConfiguration = {}) => {
	// const { data, error, isLoading } = useSWR<IProduct[]>(`/api${url}`, fetcher, config);
	const { data, error, isLoading } = useSWR<IProduct>(`/api${url}`, config);
	return {
		product: data,
		//isLoading: !error && !data,
		isLoading,
		error
	};
};
