import React from 'react';
import { subpagesData} from 'assets/data/subpagesData';
import SubpageTemplate from 'templates/SubpageTemplate';
import { routes } from '../../routes';

const PolicyView = () => <SubpageTemplate policy { ...subpagesData[routes.policy] }/>;

export default PolicyView;