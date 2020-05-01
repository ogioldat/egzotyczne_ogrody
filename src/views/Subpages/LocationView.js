import React from 'react';
import { subpagesData} from 'assets/data/subpagesData';
import SubpageTemplate from 'templates/SubpageTemplate';
import { routes } from '../../routes';

const LocationView = () => <SubpageTemplate { ...subpagesData[routes.location] }/>;

export default LocationView