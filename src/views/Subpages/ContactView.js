import React from 'react';
import { subpagesData} from 'assets/data/subpagesData';
import SubpageTemplate from 'templates/SubpageTemplate';
import { routes } from '../../routes';

const ContactView = () => <SubpageTemplate { ...subpagesData[routes.contact] }/>;

export default ContactView;