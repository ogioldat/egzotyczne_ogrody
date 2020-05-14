const apiAddress = 'https://api.egzotyczneogrody.pl/index.php/wp-json/wp/v2/';

const endpoints = {
  galleryImages: `${ apiAddress }gallery?per_page=100`,
  plants: {
    bananas: {
      category: 'bananas',
      address: `${ apiAddress }bananas`
    },
    bamboos: {
      category: 'bamboos',
      address: `${ apiAddress }bamboos`
    },
    grasses: {
      category: 'grasses',
      address: `${ apiAddress }grasses`
    },
    waterPlants: {
      category: 'waterPlants',
      address: `${ apiAddress }water_plants`
    },
    others: {
      category: 'others',
      address: `${ apiAddress }others`
    }
  },
};

export default endpoints;