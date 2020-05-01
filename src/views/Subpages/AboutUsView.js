import React from 'react';
import { subpagesData} from 'assets/data/subpagesData';
import SubpageTemplate from 'templates/SubpageTemplate';
import { routes } from '../../routes';

const AboutUsView = () => <SubpageTemplate { ...subpagesData[routes.aboutUs] }/>;

export default AboutUsView;
