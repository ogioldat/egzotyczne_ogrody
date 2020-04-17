import React from 'react';
import { subpagesData} from 'data/subpagesData';
import SubpageTemplate from 'templates/SubpageTemplate';
import { routes } from '../routes';

export const AboutUsView = () => <SubpageTemplate { ...subpagesData[routes.aboutUs] }/>;
export const OrdersView = () => <SubpageTemplate { ...subpagesData[routes.orders] }/>;
export const ContactView = () => <SubpageTemplate { ...subpagesData[routes.contact] }/>;
export const LocationView = () => <SubpageTemplate { ...subpagesData[routes.location] }/>;
export const PolicyView = () => <SubpageTemplate { ...subpagesData[routes.policy] }/>;
