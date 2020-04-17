import { routes } from 'routes';
import paymentMethods from 'assets/logos/payment_methods.jpg';
import home from 'assets/images/home.jpg';
import { text } from './privacyPolicyText';

export const subpagesData = {
  [routes.orders]: {
    title: 'wysyłka',
    content: [
      {
        headingText: 'dni wysyłki',
        paragraphText: `Przesyłki dla bezpieczeństwa roślin wysyłamy od poniedziałku do środy - paczkomatami
              Inpost, kurierem od poniedziałku do wtorku, na czas transportu rośliny odpowiednio
              zabezpieczamy przed utratą wilgoci, przemieszczaniem się w paczce, tak aby dotarły do
              Państwa w jak najlepszym stanie.`,
      },
      {
        headingText: 'zabezpieczenie roślin',
        paragraphText: `Przesyłka roślin egzotycznych i wrażliwych na niskie
              temperatury jest realizowana przy sprzyjających warunkach pogodowych, tzn.
              temperaturach powyżej 0° C, z tego względu może się opóźnić, o czym będziemy na
              bieżąco informować.`,
      },
      {
        headingText: 'koszty przesyłki',
        paragraphText: `Koszty przesyłki w zależności od zakupionej rośliny i wyboru przewoźnika (Paczkomaty
              Inopst, Kurier)
              mieszczą się zazwyczaj w przedziale: 15 - 25 zł,
              przy odbiorze osobistym możliwość zapłaty kartą lub telefonem.`,
      },
    ],
    paymentImage: paymentMethods,
  },
  [routes.aboutUs]: {
    title: 'o nas',
    content: [
      {
        headingText: 'narodziny pasji',
        paragraphText: `
                Rośliny egzotyczne od dawna nas pasjonowały.
        Ich niezwykły wygląd, bogactwo kolorów i gatunków
        przywoływało wakacyjne wspomnienia z pobytu w Chorwacji,
        czy też z innych zakątków świata. `,
      },
      {
        headingText: 'dlaczego egzotyka?',
        paragraphText: `Chcąc zachować na
      dłużej w pamięci wspaniały, niepowtarzalny klimat
      tamtejszej roślinności postanowiliśmy nasz dwudziestoletni
      ogród przearanżować i nadać mu nieco egzotyczny wygląd.
        Dlatego pojawiły się w nim bambusy, bananowce w kilku
      odmianach i trawy ozdobne. Tak zaczęła się nasza przygoda
      z roślinami egzotycznymi.`,
      },
      {
        headingText: 'egzotyka dla każdego',
        paragraphText: `Wydawałoby się, że w naszym klimacie rośliny
        egzotyczne można zobaczyć
        jedynie w palmiarniach i ogrodach botanicznych,
        a dbanie o nie, jest skomplikowane. Nic bardziej
        mylnego. Są gatunki, które dobrze czują się w naszej
        szerokości geograficznej, nie straszna jest dla nich
        zima (zwłaszcza, że klimat się ociepla) i z powodzeniem
        się rozmnażają.`,
      },
    ],
  },
  [routes.contact]: {
    title: 'kontakt',
    content: [
      {
        headingText: 'email',
        paragraphText: 'biuro@egzotyczneogrody.pl',
      },
      {
        headingText: 'telefon',
        paragraphText: '+48 793 440 365',
      },
      {
        headingText: 'messenger',
        paragraphText: 'https://m.me/piotrogiolda',
        isLink: true,
      },
      {
        headingText: 'facebook',
        paragraphText: 'https://www.facebook.com/piotrogiolda',
        isLink: true,
      },
    ],
  },
  [routes.location]: {
    title: 'lokalizacja',
    content: [
      {
        headingText: 'adres',
        paragraphText: 'ul. Mańki 9, 42-286 Koszęcin',
      },
      {
        headingText: 'telefon',
        paragraphText: '+48 793 440 365',
      },
    ],
    homeImage: home,
  },
  [routes.policy]: {
    title: 'polityka prywatności',
    content: [
      {
        headingText: '',
        paragraphText: text,
      },
    ],
  },

};