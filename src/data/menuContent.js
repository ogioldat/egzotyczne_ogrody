import { routes } from '../routes';

export const content = {
  info: [
    {
      label: 'wysyłka',
      link:routes.orders
    },
    {
      label: 'lokalizacja',
      link: routes.location
    },
    {
      label: 'o nas',
      link: routes.aboutUs
    },
    {
      label: 'kontakt',
      link: routes.contact
    },
    {
      label: 'polityka prywatności',
      link: routes.policy
    }
  ],
  gallery: [
    {
      label: 'zobacz zdjęcia',
      link: routes.gallery
    }
  ]
};