import { UserProps } from '../components/buyModal/buyModal';
import { http } from '../config/http';

interface OrderProps {
    user: UserProps
    data: {}[]
};

const path = '/orders';

export const postOrderService = async (order: OrderProps) => (
    await http.post(path, order)
);