import React from 'react';
import { subpagesData} from 'assets/data/subpagesData';
import SubpageTemplate from 'templates/SubpageTemplate';
import { routes } from '../../routes';

const OrdersView = () => <SubpageTemplate { ...subpagesData[routes.orders] }/>;

export default OrdersView;