import { routes } from '../../routes';

export const content = {
  contact: [
    {
      label: 'telefon',
      link:routes.contact
    },
    {
      label: 'mail',
      link: routes.contact
    },
    {
      label: 'facebook',
      link: routes.contact
    },
    {
      label: 'messanger',
      link: routes.contact
    }
  ],
  info: [
    {
      label: 'lokalizacja',
      link: routes.location
    },
    {
      label: 'o nas',
      link: routes.aboutUs
    },
    {
      label: 'wysyłka',
      link: routes.orders
    }
  ]
};