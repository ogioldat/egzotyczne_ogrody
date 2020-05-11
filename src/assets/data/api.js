const apiAddress = 'http://my.domain';

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