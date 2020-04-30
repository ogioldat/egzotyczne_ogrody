const apiAdress = 'http://192.168.0.159/wordpress/wp-json/';

const endpoints = {
  galleryImages: `${ apiAdress }wp/v2/gallery?per_page=100`,
  plants: {
    bananas: {
      category: 'bananas',
      address: `${ apiAdress }wp/v2/bananas`
    },
    bamboos: {
      category: 'bamboos',
      address: `${ apiAdress }wp/v2/bamboos`
    },
    grasses: {
      category: 'grasses',
      address: `${ apiAdress }wp/v2/grasses`
    },
    waterPlants: {
      category: 'waterPlants',
      address: `${ apiAdress }wp/v2/water_plants`
    },
    others: {
      category: 'others',
      address: `${ apiAdress }wp/v2/others`
    }
  },
};

export default endpoints;