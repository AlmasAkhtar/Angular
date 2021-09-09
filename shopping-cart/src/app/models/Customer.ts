import { IOrder } from './Order';
import { ICart } from './Cart';

export interface ICustomer {
    id: number;
    name: string;
    orders: IOrder[];
    cart: ICart;
}

export class Customer {
    id = 0;
    name: string;
    orders: IOrder[];
    cart: ICart;
}
