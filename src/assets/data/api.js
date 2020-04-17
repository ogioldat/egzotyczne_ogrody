const apiAdress = 'http://192.168.0.159//wordpress/wp-json/';

const endpoints = {
  galleryImages: `${ apiAdress }wp/v2/gallery`,
  plants: {
    bananas: {
      category: 'bananas',
      address: `${ apiAdress }wp/v2/bananas`
    },
    bamboos: {
      category: 'bamboos',
      address: `${ apiAdress }wp/v2/bamboos`
    },
  },
};

export default endpoints;